export type Channel = {
  id: string;
  name: string;
  url: string;
  logo?: string;
};

export type CustomLayout = {
  id: string;
  name:string;
  channelIds: string[];
}
