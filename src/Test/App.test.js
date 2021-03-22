import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import App from "../App";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("shouldn't render App with no parameters", () => {
  act(() => {
    render(<App />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<main class=\\"main\\">
      <header class=\\"header\\">
        <div class=\\"header__content\\">
          <div class=\\"header__logo\\"><svg width=\\"98\\" height=\\"30\\" fill=\\"#fff\\" class=\\"hrc-1nbWG\\" viewBox=\\"0 0 98 30\\" datareactid=\\".9urfwup4qy.1.2.0.0.0.0.0.0.0.0\\">
              <defs datareactid=\\".9urfwup4qy.1.2.0.0.0.0.0.0.0.0.0\\">
                <path id=\\"a\\" d=\\"M0 .592h32.552V21.6H0z\\" datareactid=\\".9urfwup4qy.1.2.0.0.0.0.0.0.0.0.0.0\\"></path>
              </defs>
              <g fill=\\"inherit\\" datareactid=\\".9urfwup4qy.1.2.0.0.0.0.0.0.0.0.1\\">
                <g transform=\\"translate(0 8.334)\\" datareactid=\\".9urfwup4qy.1.2.0.0.0.0.0.0.0.0.1.0\\">
                  <mask id=\\"b\\" fill=\\"#fff\\" datareactid=\\".9urfwup4qy.1.2.0.0.0.0.0.0.0.0.1.0.0\\">
                    <use href=\\"#a\\" datareactid=\\".9urfwup4qy.1.2.0.0.0.0.0.0.0.0.1.0.0.0\\"></use>
                  </mask>
                  <path d=\\"M16.276 21.6C4.78 21.6-.446 13.624.03 1.75.03.87.837.593 2.262.593c1.33 0 2.422.184 2.376 1.159-.285 9.46 2.66 15.49 11.638 15.49 9.075 0 12.02-6.169 11.64-15.49C27.867.776 28.96.59 30.29.59c1.425 0 2.232.279 2.232 1.16.475 12.01-4.845 19.849-16.247 19.849\\" datareactid=\\".9urfwup4qy.1.2.0.0.0.0.0.0.0.0.1.0.1\\"></path>
                </g>
                <path d=\\"M9.034 7.888l.048 6.882c0 .989 1.014 1.272 2.174 1.225 1.496-.048 2.413-.376 2.317-1.366a202.643 202.643 0 0 1-.418-4.809 87.439 87.439 0 0 1 3.121-.047c1.305 0 2.21.069 3.069.123a210.404 210.404 0 0 1-.413 4.733c-.097.99.82 1.318 2.317 1.366 1.16.047 2.172-.236 2.172-1.225l.05-6.882c.145-2.78.386-4.195.675-6.362C24.243.583 23.47.11 21.925.017c-1.303-.094-2.365.189-2.365 1.178a78.03 78.03 0 0 1-.02 5.181c-2.306.108-4.429.11-6.576-.01a77.745 77.745 0 0 1-.019-5.171c0-.99-1.062-1.272-2.365-1.178-1.546.094-2.318.566-2.221 1.509.289 2.167.53 3.582.675 6.362m29.995 16.523h4.342v-8.663a4.007 4.007 0 0 1 1.023-.677 3.105 3.105 0 0 1 1.353-.289c.536 0 .964.148 1.287.44.321.296.483.829.483 1.601v7.588h4.342v-8.828c0-1.38-.367-2.462-1.1-3.243-.734-.781-1.749-1.172-3.046-1.172a4.93 4.93 0 0 0-2.394.607c-.743.404-1.4.929-1.976 1.572l.026-7.13h-4.34V24.41zm25.096-4.028c-.258.24-.571.441-.94.607a2.997 2.997 0 0 1-1.241.248c-.554 0-.986-.152-1.299-.456-.313-.302-.47-.84-.47-1.614v-7.586h-4.342v8.828c0 1.38.358 2.46 1.074 3.243.717.781 1.717 1.172 3.003 1.172.856 0 1.646-.198 2.372-.594a7.284 7.284 0 0 0 1.843-1.393v1.573h4.342V11.582h-4.342v8.8zm32.886-5.311c-.28-.819-.662-1.518-1.148-2.098a4.974 4.974 0 0 0-1.751-1.338 5.292 5.292 0 0 0-2.227-.468c-.842 0-1.56.184-2.158.551a7.806 7.806 0 0 0-1.512 1.187l.025-6.689h-4.339v18.608l4.062-.552c.428.147.92.272 1.47.372.55.101 1.04.153 1.471.153.877 0 1.714-.162 2.507-.483a6.165 6.165 0 0 0 2.088-1.394 6.604 6.604 0 0 0 1.414-2.194c.346-.854.518-1.815.518-2.882 0-1.03-.14-1.955-.42-2.773m-4.67 5.573c-.498.654-1.21.98-2.132.98-.776 0-1.431-.175-1.966-.526v-5.655c.294-.257.608-.47.942-.635.33-.166.738-.247 1.218-.247.885 0 1.555.307 2.008.924.452.617.678 1.476.678 2.579 0 1.066-.25 1.927-.748 2.58m-11.704-9.02a4.1 4.1 0 0 0-1.18-.179c-1.237 0-2.211.648-2.924 1.944v-1.836h-4.045v12.857h4.045v-7.32c.894-2.11 3.558-1.788 4.104-1.692v-3.774z\\" datareactid=\\".9urfwup4qy.1.2.0.0.0.0.0.0.0.0.1.1\\"></path>
              </g>
            </svg></div>
          <h1 class=\\"header__title\\">Search city weather</h1>
        </div>
      </header>
      <div class=\\"weather\\">
        <div class=\\"weather__wrapper\\">
          <div class=\\"search\\"><label class=\\"search__label \\"><input class=\\"search__input\\" type=\\"text\\" placeholder=\\"Cidade\\" value=\\"\\"><button class=\\"search__btn\\"><svg height=\\"24px\\" viewBox=\\"0 0 24 24\\" width=\\"24px\\" fill=\\"#FFFFFF\\">
                  <path d=\\"M0 0h24v24H0V0z\\" fill=\\"none\\"></path>
                  <path d=\\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\\"></path>
                </svg></button></label></div>
          <div class=\\"card theme--noInfo\\">
            <div class=\\"card__wrapper\\">
              <div class=\\"cityInfo\\">
                <div class=\\"cityInfo__wrapper\\"><span class=\\"cityInfo__icon\\"></span>
                  <h2 class=\\"cityInfo__title\\"></h2>
                </div>
              </div>
              <div class=\\"card__content-info\\">
                <div class=\\"card__icon\\"></div>
                <div class=\\"card__text-box\\">
                  <div class=\\"card__today\\"><span class=\\"card__today-info\\">Hoje </span>
                    <div class=\\"meters\\"><span class=\\"meters__box-info\\">0<span class=\\"meters__unit meters__unit--celsius\\"><span class=\\"meters__celsius\\"> °C</span> | <span class=\\"meters__fahrenheit\\">°F</span></span></span></div>
                  </div>
                  <div class=\\"status\\"></div>
                </div>
              </div>
              <div class=\\"boxTemp boxTemp--tomorrow\\">
                <div class=\\"boxTemp__wrapper\\"><span class=\\"boxTemp__box-info\\">amanhã </span>
                  <div class=\\"meters\\"><span class=\\"meters__box-info\\">NaN<span class=\\"meters__unit meters__unit--celsius\\"><span class=\\"meters__celsius\\"> °C</span> | <span class=\\"meters__fahrenheit\\">°F</span></span></span></div>
                </div>
              </div>
              <div class=\\"boxTemp boxTemp--after\\">
                <div class=\\"boxTemp__wrapper\\"><span class=\\"boxTemp__box-info\\">depois de amanhã </span>
                  <div class=\\"meters\\"><span class=\\"meters__box-info\\">NaN<span class=\\"meters__unit meters__unit--celsius\\"><span class=\\"meters__celsius\\"> °C</span> | <span class=\\"meters__fahrenheit\\">°F</span></span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>"
  `); /* ... gets filled automatically by jest ... */
});
