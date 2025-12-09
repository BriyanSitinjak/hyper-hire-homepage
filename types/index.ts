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

export interface BoxContentData {
  id: string;
  title: string;
  subTitle: string;
}

export interface BoxSliderData {
  icon: string;
  title: string;
}

export interface HomePageData {
  leftContent: {
    popupContent: string;
    title1: string;
    title2: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    box: BoxContentData[];
  };
  cards: ProfileCard[];
  boxSlider: BoxSliderData[];
}

export interface ServiceCard {
  icon: string;
  title: string;
  link: string;
}

export interface TextFooterInterface {
  title: string;
  name: string;
  address: string;
}