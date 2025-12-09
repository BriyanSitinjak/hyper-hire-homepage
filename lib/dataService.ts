import type { HomePageData } from '@/types';

// This function can be called directly from server components for SSR
export async function getHomePageData(): Promise<HomePageData> {
  // Static DUMMY data
  const homePageData: HomePageData = {
    leftContent: {
      popupContent: '풀타임, 파트타임',
      title1: '최고의 실력을 가진',
      title2: '외국인 인재를 찾고 계신가요?',
      subtitle1: '법률 및 인사관리 부담없이',
      subtitle2: '1주일 이내에 원격으로 채용해보세요.',
      subtitle3: '개발자가 필요하신가요?',
      box: [
        {
          id: 'box-1',
          title: '평균 월 120만원',
          subTitle: '임금을 해당 국가를 기준으로 계산합니다.',
        },
        {
          id: 'box-2',
          title: '최대 3회 인력교체',
          subTitle: '막상 채용해보니 맞지 않아도 걱정하지 마세요. ',
        },
        {
          id: 'box-3',
          title: '평균 3일, 최대 10일',
          subTitle: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
        },
      ]
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
    boxSlider: [
      {
        icon: '/icon-marketing.svg',
        title: '해외 마케팅'
      },
      {
        icon: '/icon-image.svg',
        title: '퍼블리셔'
      },
      {
        icon: '/icon-box.svg',
        title: '캐드원(제도사)'
      },
      {
        icon: '/icon-target.svg',
        title: '해외 세일즈'
      },
      {
        icon: '/icon-call.svg',
        title: '해외 CS'
      },
    ]
  };

  // I do some simulation for a small delay 
  await new Promise((resolve) => setTimeout(resolve, 10));

  return homePageData;
}
