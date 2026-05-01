import { createBucketClient } from '@cosmicjs/sdk'
import type { Character, Chapter, Location } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getAllChapters(): Promise<Chapter[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'chapters' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)

    const chapters = response.objects as Chapter[]
    return chapters.sort((a, b) => {
      const numA = Number(a.metadata?.chapter_number || 0)
      const numB = Number(b.metadata?.chapter_number || 0)
      return numA - numB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch chapters')
  }
}

export async function getChapterBySlug(slug: string): Promise<Chapter | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'chapters', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    return response.object as Chapter
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch chapter')
  }
}

export async function getAllCharacters(): Promise<Character[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'characters' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Character[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch characters')
  }
}

export async function getCharacterBySlug(slug: string): Promise<Character | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'characters', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.object as Character
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch character')
  }
}

export async function getAllLocations(): Promise<Location[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'locations' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Location[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch locations')
  }
}

export async function getLocationBySlug(slug: string): Promise<Location | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'locations', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.object as Location
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch location')
  }
}