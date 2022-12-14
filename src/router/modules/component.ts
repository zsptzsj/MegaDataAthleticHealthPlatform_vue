import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/router/routes/constant";
import { renderIcon } from "@/utils/index";
import {
  AppsOutline,
  RadioButtonOffOutline,
  TabletLandscapeOutline,
  CardOutline,
} from "@vicons/ionicons5";

/**
 * @param name 路由名称, 必须设置,且不能重名
 * @param meta 路由元信息（路由附带扩展信息）
 * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 * @param meta.disabled 禁用整个菜单
 * @param meta.title 菜单名称
 * @param meta.icon 菜单图标
 * @param meta.keepAlive 缓存该路由
 * @param meta.sort 排序越小越排前
 *
 * */
const routes: Array<RouteRecordRaw> = [
  {
    path: "/component",
    name: "component",
    component: Layout,
    meta: {
      title: "运动指导",
      icon: renderIcon(AppsOutline),
      sort: 2,
    },
    children: [
      {
        path: "button",
        name: "component_button",
        meta: {
          title: "修改",
          icon: renderIcon(RadioButtonOffOutline),
          permission: `["Administrator"]`,
        },
        component: () => import("@/views/component/button/index.vue"),
      },
      {
        path: "table",
        name: "component_table",
        meta: {
          title: "运动类型",
          icon: renderIcon(TabletLandscapeOutline),
        },
        component: () => import("@/views/component/table/index.vue"),
      },
    ],
  },
];

export default routes;
