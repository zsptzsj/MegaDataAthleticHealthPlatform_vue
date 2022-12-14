import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/router/routes/constant";
import { CheckmarkCircleOutline } from "@vicons/ionicons5";
import { renderIcon } from "@/utils/index";

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 * @param meta.hidden 隐藏这个菜单项
 * */

const routes: Array<RouteRecordRaw> = [
  {
    path: "/result1",
    name: "Result1",
    redirect: "/result1/success1",
    component: Layout,
    meta: {
      title: "体测成绩",
      icon: renderIcon(CheckmarkCircleOutline),
      sort: 4,
    },
    children: [
      {
        path: "success1",
        name: "result-success1",
        meta: {
          title: "标准",
        },
        component: () => import("@/views/result/success.vue"),
      },
      {
        path: "fail1",
        name: "result-fail1",
        meta: {
          title: "评分表",
        },
        component: () => import("@/views/result/fail.vue"),
      },
    ],
  },
];

export default routes;
