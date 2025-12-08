/**
 * Type definitions for the application
 */

export interface ProfileCard {
  id: string;
  profileImage: string;
  flagImage: string;
  name: string;
  job: string;
  infoItems: string[];
}

export interface HomePageData {
  leftContent: {
    texts: Array<{
      id: string;
      content: string;
      fontSize: string;
      position: {
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
      };
      animationDelay: number;
    }>;
  };
  cards: ProfileCard[];
}
