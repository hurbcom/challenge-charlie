export type ResolveRemoteUrlFunction = (
  remoteName: string
) => string | Promise<string>;

declare const __webpack_init_sharing__: (scope: 'default') => Promise<void>;
declare const __webpack_share_scopes__: { default: unknown };

let resolveRemoteUrl: ResolveRemoteUrlFunction;

export function setRemoteUrlResolver(
  _resolveRemoteUrl: ResolveRemoteUrlFunction
) {
  resolveRemoteUrl = _resolveRemoteUrl;
}

let remoteUrlDefinitions: Record<string, string>;

export function setRemoteDefinitions(definitions: Record<string, string>) {
  console.log("🚀 ~ file: load-remote-module.ts:19 ~ setRemoteDefinitions ~ definitions", definitions)
  remoteUrlDefinitions = definitions;
}

const remoteModuleMap = new Map<string, unknown>();
const remoteContainerMap = new Map<string, unknown>();

export async function loadRemoteModule(remoteName: string, moduleName: string) {
  const remoteModuleKey = `${remoteName}:${moduleName}`;
  if (remoteModuleMap.has(remoteModuleKey)) {
    return remoteModuleMap.get(remoteModuleKey);
  }

  const container = remoteContainerMap.has(remoteName)
    ? remoteContainerMap.get(remoteName)
    : await loadRemoteContainer(remoteName);

  const factory = await container.get(moduleName);
  const Module = factory();
  console.log("🚀 ~ file: load-remote-module.ts:38 ~ loadRemoteModule ~ Module", Module)

  remoteModuleMap.set(remoteModuleKey, Module);

  return Module;
}

async function loadModule(url: string) {
  console.log("🚀 ~ file: load-remote-module.ts:45 ~ loadModule ~ url", url)
  const importTask = import(/* webpackIgnore:true */ url);
  console.log("🚀 ~ file: load-remote-module.ts:48 ~ loadModule ~ importTask", importTask)
  try {
    const result = await importTask
    return result
  } catch(err) {
    console.log("🚀 ~ file: load-remote-module.ts:52 ~ loadModule ~ err", err)
  }

}

let initialSharingScopeCreated = false;

async function loadRemoteContainer(remoteName: string) {
  console.log("🚀 ~ file: load-remote-module.ts:51 ~ loadRemoteContainer ~ remoteName", remoteName)
  if (!resolveRemoteUrl && !remoteUrlDefinitions) {
    throw new Error(
      'Call setRemoteDefinitions or setRemoteUrlResolver to allow Dynamic Federation to find the remote apps correctly.'
    );
  }

  if (!initialSharingScopeCreated) {
    initialSharingScopeCreated = true;
    await __webpack_init_sharing__('default');
  }

  const remoteUrl = remoteUrlDefinitions
    ? remoteUrlDefinitions[remoteName]
    : await resolveRemoteUrl(remoteName);

  const containerUrl = `${remoteUrl}${
    remoteUrl.endsWith('/') ? '' : '/'
  }remoteEntry.js`;
  console.log("🚀 ~ file: load-remote-module.ts:70 ~ loadRemoteContainer ~ containerUrl", containerUrl)

  const container = await loadModule(containerUrl);
  console.log("🚀 ~ file: load-remote-module.ts:74 ~ loadRemoteContainer ~ container", container)
  await container.init(__webpack_share_scopes__.default);

  remoteContainerMap.set(remoteName, container);
  return container;
}
