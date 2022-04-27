// 用户有关的接口

import request from "@/utils/request";

export const login = (data) => {
  //函数体
  return request({
    method: "POST",
    url: "/v1_0/authorizations",
    data,
  });
};

/**
 * 发送验证码
 * 注意：每手机号每分钟1次
 */
export const sendSms = (mobile) => {
  return request({
    method: "GET",
    url: `/v1_0/sms/codes/${mobile}`,
  });
};

/**
 * 获取用户自己的信息
 */
export const getUserInfo = () => {
  return request({
    method: "GET",
    url: "v1_0/user",
  });
};

/**
 * 获取用户频道列表
 */
export const getUserChannels = () => {
  return request({
    method: "GET",
    url: "/v1_0/user/channels",
  });
};

/**
 * 关注用户
 */
export const addFollow = (target) => {
  return request({
    method: "POST",
    url: "/v1_0/user/followings",
    data: {
      target,
    },
  });
};

/**
 * 取消关注用户
 */
export const deleteFollow = (target) => {
  return request({
    method: "DELETE",
    url: `/v1_0/user/followings/${target}`,
  });
};
