import { types } from "./data";

export function isEventArray(posts: any[]): posts is types.Event[] {
  return posts[0].category === "最新活動";
}
export function isPolicyArray(posts: any[]): posts is types.Policy[] {
  return posts[0].category === "政策議題";
}
