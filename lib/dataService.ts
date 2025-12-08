import type { HomePageData } from '@/types';

// This function can be called directly from server components for SSR
export async function getHomePageData(): Promise<HomePageData> {
  // Static DUMMY data
  const homePageData: HomePageData = {
    leftContent: {
      texts: [
        {
          id: 'text-1',
          content: 'Find Your',
          fontSize: 'text-6xl',
          position: {
            top: '20%',
            left: '0',
          },
          animationDelay: 0.2,
        },
        {
          id: 'text-2',
          content: 'Dream Team',
          fontSize: 'text-7xl',
          position: {
            top: '30%',
            left: '0',
          },
          animationDelay: 0.4,
        },
        {
          id: 'text-3',
          content: 'Today',
          fontSize: 'text-5xl',
          position: {
            top: '45%',
            left: '0',
          },
          animationDelay: 0.6,
        },
        {
          id: 'text-4',
          content: 'Connect with top talent worldwide',
          fontSize: 'text-xl',
          position: {
            top: '55%',
            left: '0',
          },
          animationDelay: 0.8,
        },
      ],
    },
    cards: [
      {
        id: 'card-1',
        profileImage: '/profile_hyper_hire.png',
        flagImage: '/flag_edge_circle.png',
        name: 'Abhishek Gupta',
        job: '마케팅 · 2y+',
        infoItems: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
      {
        id: 'card-2',
        profileImage: '/profile_hyper_hire.png',
        flagImage: '/flag_edge_circle.png',
        name: 'Abhishek Gupta',
        job: '마케팅 · 2y+',
        infoItems: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
      {
        id: 'card-3',
        profileImage: '/profile_hyper_hire.png',
        flagImage: '/flag_edge_circle.png',
        name: 'Abhishek Gupta',
        job: '마케팅 · 2y+',
        infoItems: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
    ],
  };

  // I do some simulation for a small delay 
  await new Promise((resolve) => setTimeout(resolve, 10));

  return homePageData;
}
