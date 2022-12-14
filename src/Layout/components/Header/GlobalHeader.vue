<template>
  <header class="shadow-sm">
    <div
      class="flex h-full w-full items-center justify-between border-b border-gray-200"
      :style="`height:${systemStore.headerSetting.headerHeight}px`"
    >
      <div class="flex h-full">
        <div class="flex items-center">
          <div class="hoverBtn" @click="changeCollapsed">
            <n-icon :size="size">
              <MenuOutline />
            </n-icon>
          </div>
          <div class="hoverBtn">
            <n-icon :size="size">
              <ReloadOutline />
            </n-icon>
          </div>
        </div>
        <!-- 面包屑 -->
        <div class="ml-4 flex items-center">
          <n-breadcrumb v-if="breadcrumbList.length != 0">
            <template v-for="routeItem in breadcrumbList" :key="routeItem.name">
              <n-breadcrumb-item v-if="routeItem.meta?.title">
                <n-dropdown
                  v-if="routeItem.children.length"
                  :options="routeItem.children"
                  @select="dropdownSelect"
                >
                  <span class="link-text">
                    {{ routeItem.meta?.title }}
                  </span>
                </n-dropdown>
                <span v-else class="link-text">
                  {{ routeItem.meta?.title }}
                </span>
              </n-breadcrumb-item>
            </template>
          </n-breadcrumb>
        </div>
      </div>
      <div class="flex h-full items-center pr-10">
        <n-dropdown trigger="hover" :options="options" @select="handleSelect">
          <div class="hoverBtn">
            <n-avatar
              round
              bordered
              :size="size + 8"
              :src="user.imagePath || '/icon/ms-icon-310x310.png'"
            />
          </div>
        </n-dropdown>
        <n-tooltip trigger="hover">
          <template #trigger>
            <div class="hoverBtn" @click="openSetting">
              <n-icon :size="size">
                <SettingsOutline />
              </n-icon></div></template
          ><span>项目配置</span></n-tooltip
        >
      </div>
    </div>
    <!--项目配置-->
    <ProjectSetting ref="drawerSetting" class="z-100" />
  </header>
</template>

<script setup lang="ts">
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  MenuOutline,
  ReloadOutline,
  FlameOutline,
  SettingsOutline,
} from "@vicons/ionicons5";
import { renderIcon } from "@/utils/router/index";
import { storage } from "@/utils/storage/storage";
import { CURRENT_USER } from "@/stores/mutation-types";
import ProjectSetting from "./components/systemSetting.vue";
import { useUserStore } from "@/stores/modules/user";
import { useSystemSettingStore } from "@/stores/modules/systemSetting";

const emit = defineEmits(["update:collapsed"]);

const message = window["$message"];
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const systemStore = useSystemSettingStore();
const drawerSetting = ref();

/**
 * 面包屑导航
 */
const generator: any = (routerMap) => {
  return routerMap.map((item) => {
    // 如果为隐藏菜单，则返回空
    if (item?.meta?.hideBreadcrumb) {
      return [];
    }
    const currentMenu = {
      ...item,
      label: item.meta.title,
      key: item.name,
      disabled: item.path === "/",
    };
    // 是否有子菜单，并递归处理
    if (item.children && item.children.length > 0) {
      // Recursion
      currentMenu.children = generator(item.children, currentMenu);
    }
    return currentMenu;
  });
};

const breadcrumbList = computed(() => {
  return generator(route.matched);
});
const dropdownSelect = (key) => {
  router.push({ name: key });
};

// 图表大小
const size = ref(18);

const changeCollapsed = () => {
  emit("update:collapsed");
};

const user = storage.get(CURRENT_USER);

const options = [
  {
    label: `${user.userName}`,
    key: "userName",
    icon: renderIcon(FlameOutline),
  },
  {
    label: "用户资料",
    key: "profile",
    icon: renderIcon(UserIcon),
  },
  {
    label: "编辑用户资料",
    key: "editProfile",
    icon: renderIcon(EditIcon),
  },
  {
    label: "退出登录",
    key: "logout",
    icon: renderIcon(LogoutIcon),
  },
];

const handleSelect = (key: string | number) => {
  if (key === "logout") {
    window["$dialog"].warning({
      title: "警告",
      content: "确定退出吗？",
      positiveText: "确定",
      negativeText: "再想想",
      onPositiveClick: () => {
        userStore.logout().then(() => {
          message.success("已退出");
        });
      },
      onNegativeClick: () => {
        return;
      },
    });
  } else if (key == "editProfile" || key == "profile") {
    router.push({ path: `/setting/account` });
  }
};

const openSetting = () => {
  // const { changeDrawer } = drawerSetting.value;
  // changeDrawer(true);
  const { changeDrawer } = drawerSetting.value;
  changeDrawer();
};
</script>
