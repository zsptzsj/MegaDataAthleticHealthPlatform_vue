interface UserModel {
  token: string;
  id: string;
  userName: string;
  avatar: string;
  role: string;
  //   模拟后端返回的JSON形式的数组
  permissions: string;
  password: string;
}

export const userModel: UserModel[] = [
  {
    token: "__TOKEN_SOUP_SUPER__",
    id: "0",
    userName: "Soup_super",
    avatar: "/icon/ms-icon-310x310.png",
    role: "super",
    permissions: `["Administrator"]`,
    password: "super",
  },
  {
    token: "__TOKEN_SOUP_ADMIN__",
    id: "1",
    userName: "Soup_Admin",
    avatar: "/icon/ms-icon-310x310.png",
    role: "admin",
    permissions: `["inspector"]`,
    password: "admin123",
  },
  {
    token: "__TOKEN_SOUP_VIPUSER__",
    id: "2",
    userName: "Soup_VIPUSER",
    avatar: "/icon/ms-icon-310x310.png",
    role: "vipuser",
    permissions: `["teacher"]`,
    password: "vipuser123",
  },
  {
    token: "__TOKEN_SOUP_USER__",
    id: "3",
    userName: "Soup_User",
    avatar: "/icon/ms-icon-310x310.png",
    role: "user",
    permissions: `["student"]`,
    password: "user114514",
  },
];
