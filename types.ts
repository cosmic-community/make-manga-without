export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  thumbnail?: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Character extends CosmicObject {
  type: 'characters';
  metadata: {
    name?: string;
    role?: string;
    age?: number | string;
    personality?: string;
    background?: string;
    portrait?: CosmicImage;
  };
}

export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    name?: string;
    description?: string;
    image?: CosmicImage;
  };
}

export interface Chapter extends CosmicObject {
  type: 'chapters';
  metadata: {
    title?: string;
    chapter_number?: number;
    synopsis?: string;
    story_content?: string;
    cover_art?: CosmicImage;
    page_artwork?: CosmicImage[];
    featured_characters?: Character[];
    location?: Location;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}