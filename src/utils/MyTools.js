import { useEffect } from 'react';
import { request } from 'umi';
const Mounted = (fn) => useEffect(fn, []);
const Get = (url) => request(url, { method: 'GET' });
const Post = (url, postData) =>
  request(url, { method: 'POST', data: postData });
export { Mounted, Get, Post };
