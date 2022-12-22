export type GetBackgroundControllerOutput = {
  url: string;
};

export type GetBackgroundControllerContract = {
  execute(): Promise<GetBackgroundControllerOutput>;
};
