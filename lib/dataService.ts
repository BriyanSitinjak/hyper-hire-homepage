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
        profileImage: '/api/placeholder/150/150',
        flagImage: '/api/placeholder/40/30',
        name: 'John Doe',
        job: 'Senior Developer',
        infoItems: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
      {
        id: 'card-2',
        profileImage: '/api/placeholder/150/150',
        flagImage: '/api/placeholder/40/30',
        name: 'Jane Smith',
        job: 'UX Designer',
        infoItems: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
      {
        id: 'card-3',
        profileImage: '/api/placeholder/150/150',
        flagImage: '/api/placeholder/40/30',
        name: 'Mike Johnson',
        job: 'Product Manager',
        infoItems: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
      },
    ],
  };

  // I do some simulation for a small delay 
  await new Promise((resolve) => setTimeout(resolve, 10));

  return homePageData;
}
