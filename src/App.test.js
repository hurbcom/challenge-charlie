import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { App, useCityName } from "App";

jest.mock("hooks/usePermissionLocation", () => ({
  usePermissionLocation: () => ({ data: "granted" }),
}));

jest.mock("modules/getPosition", () => ({
  getPosition: () => ({
    coords: {
      latitude: 22,
      longitude: 44,
    },
  }),
}));

it("App", async () => {
  navigator.geolocation = jest.fn();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
      },
    },
  });

  queryClient.setQueryData(["bingImage"], "/bingImage");
  queryClient.setQueryData(["position"], {
    coords: {
      latitude: 22,
      longitude: 44,
    },
  });
  queryClient.setQueryData(["cityInfo", 22, 44], {
    data: {
      results: [
        {
          components: {
            city: "SomeCityName",
            state: "SomeStateName",
          },
        },
      ],
    },
  });
  queryClient.setQueryData(
    ["openWeather", "SomeCityName, SomeStateName"],
    [
      {
        data: {
          main: {
            temp: 20,
            humidity: 78,
            pressure: 999,
          },
          weather: [
            {
              description: "Some description",
            },
          ],
          wind: {
            deg: 9,
            speed: 8,
          },
        },
      },
      {
        data: {
          list: [
            {
              main: {
                temp: 21,
              },
              dt_txt: "0000-00-01",
            },
            {
              main: {
                temp: 22,
              },
              dt_txt: "0000-00-02",
            },
          ],
        },
      },
    ]
  );
  useCityName.setState({
    cityName: "SomeCityName, SomeStateName",
  });

  await render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  // eslint-disable-next-line testing-library/no-node-access
  expect(document.body.firstChild.firstChild).toMatchInlineSnapshot(`
<div
  class="css-blyn4p-Container e7wudjm0"
>
  <div
    class="content"
  >
    <div
      class="header"
    >
      <span
        class="icon"
        data-icon="("
        style="display: flex;"
      />
      <form
        style="width: 100%;"
      >
        SomeCityName, SomeStateName
      </form>
    </div>
    <div
      class="today"
      style="background-color: rgba(245, 245, 0, 0.867);"
    >
      <div
        style="overflow: hidden;"
      >
        <span
          class="icon"
          data-icon="B"
        />
      </div>
      <div
        class="info"
      >
        <div
          style="font-weight: bold;"
        >
          HOJE
        </div>
        <div
          style="font-weight: bold;"
        >
          <span
            style="cursor: pointer;"
          >
            20ºC
          </span>
        </div>
        <div
          style="height: 50px;"
        />
        <div>
          Some description
        </div>
        <div>
          Vento:
          9º 8m/s
        </div>
        <div>
          Humidade:
          78%
        </div>
        <div>
          Pressão:
          999hPA
        </div>
      </div>
    </div>
    <div
      class="tomorrow"
      style="background-color: rgba(245, 243, 0, 0.867);"
    >
      <div>
        AMANHÃ
      </div>
      <div>
        <span
          style="cursor: pointer;"
        >
          21ºC
        </span>
      </div>
    </div>
    <div
      class="after-tomorrow"
      style="background-color: rgba(246, 241, 0, 0.867);"
    >
      <div>
        DEPOIS DE AMANHÃ
      </div>
      <div>
        <span
          style="cursor: pointer;"
        >
          22ºC
        </span>
      </div>
    </div>
  </div>
</div>
`);
});
