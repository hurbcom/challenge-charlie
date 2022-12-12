interface IBingImageResponse {
  total: number;
  total_pages: number;
  results: [
    {
      id: string;
      created_at: string;
      updated_at: string;
      promoted_at: string;
      width: number;
      height: number;
      color: string;
      blur_hash: string;
      description: string;
      alt_description: string;
      urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
      };
      links: {
        self: string;
        html: string;
        download: string;
        download_location: string;
      };
      likes: number;
      liked_by_user: boolean;
      current_user_collections: [];
      sponsorship: {
        impression_urls: [];
        tagline: string;
        tagline_url: string;
        sponsor: {
          id: string;
          updated_at: string;
          username: string;
          name: string;
          first_name: string;
          last_name: string;
          twitter_username: string;
          portfolio_url: string;
          bio: string;
          location: string;
          links: {
            self: string;
            html: string;
            photos: string;
            likes: string;
            portfolio: string;
            following: string;
            followers: string;
          };
          profile_image: {
            small: string;
            medium: string;
            large: string;
          };
          instagram_username: string;
          total_collections: number;
          total_likes: number;
          total_photos: number;
          accepted_tos: boolean;
        };
      };
      topic_submissions: [];
      user: {
        id: string;
        updated_at: string;
        username: string;

        name: string;
        first_name: string;
        last_name: string;

        twitter_username: string;
        portfolio_url: string;
        bio: string;

        location: string;
        links: {
          self: string;
          html: string;
          photos: string;
          likes: string;

          portfolio: string;
          following: string;
          followers: string;
        };
        profile_image: {
          small: string;
          medium: string;
          large: string;
        };
        instagram_username: string;
        total_collections: number;
        total_likes: number;
        total_photos: number;
        accepted_tos: boolean;
      };
      tags: [
        {
          type: string;
          title: string;
        }
      ];
    }
  ];
}

export default IBingImageResponse;

/*
total	:	10015
total_pages	:	1002
	results		[10]
	0		{19}
id	:	kTFmwxkF5bQ
created_at	:	2022-09-30T22:06:54Z
updated_at	:	2022-12-10T21:29:35Z
promoted_at	:	null
width	:	3267
height	:	4900
color	:		#a6a6a6
blur_hash	:	LQI#.D?u4nWA_NM{M{WBMyV[tQa#
description	:	null
alt_description	:	null
	urls		{6}
	links		{4}
likes	:	77
liked_by_user	:	false
	current_user_collections		[0]
	sponsorship		{4}
	topic_submissions		{0}
	user		{19}
	tags		[3]
*/
