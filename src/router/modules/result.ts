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
 * @param meta.tabsHidden 在标签页中不显示该路由
 * */

const routes: Array<RouteRecordRaw> = [
  {
    path: "/result",
    name: "Result",
    redirect: "/result/success",
    component: Layout,
    meta: {
      title: "阳光跑",
      icon: renderIcon(CheckmarkCircleOutline),
      sort: 4,
    },
    children: [
      {
        path: "success",
        name: "result-success",
        meta: {
          title: "成绩",
          tabsHidden: true,
          hideBreadcrumb: true,
        },
        component: () => import("@/views/result/success.vue"),
      },
      {
        path: "fail",
        name: "result-fail",
        meta: {
          title: "分析",
          tabsHidden: true,
          hideBreadcrumb: true,
        },
        component: () => import("@/views/result/fail.vue"),
      },
    ],
  },
];

export default routes;
