import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/background", () => {
    return HttpResponse.json({
      url: "https://www.bing.com/th?id=OHR.DiadoCurupira_PT-BR5262042998_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
    });
  }),
];
