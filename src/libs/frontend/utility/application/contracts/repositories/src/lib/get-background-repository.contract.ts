export type GetBackgroundRepositoryOutput = {
  url: string;
};

export type GetBackgroundRepositoryContract = {
  execute(): Promise<GetBackgroundRepositoryOutput>;
};
