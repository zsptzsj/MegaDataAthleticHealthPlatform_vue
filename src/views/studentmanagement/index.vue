<template>
  <n-data-table :columns="createColumns()" :data="tableData" />
  <n-pagination
    v-model:page="currPage"
    v-model:page-size="current"
    :page-count="Math.ceil(totals / page_size)"
    show-size-picker
    :page-sizes="pageSizes"
    @update:page="pageChange"
    @update-page-size="pageSizesChange"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { DataTableColumns, DataTableRowKey, PaginationSizeOption } from "naive-ui";
import { getStudentTern } from "@/service/api";

type RowData = {
  id: number;
  name: string;
  identityCard: string;
  age: number;
  gender: string;
  className: string;
  specialized: string;
  academy: string;
  grade: string;
  tracherId: string;
};

const createColumns = (): DataTableColumns<RowData> => [
  {
    title: "学号",
    key: "id",
  },
  {
    title: "姓名",
    key: "name",
  },
  {
    title: "身份证",
    key: "identityCard",
  },
  {
    title: "年龄",
    key: "age",
  },
  {
    title: "性别",
    key: "gender",
  },
  {
    title: "班级",
    key: "className",
  },
  {
    title: "专业",
    key: "specialized",
  },
  {
    title: "所属学院",
    key: "academy",
  },
  {
    title: "年级",
    key: "grade",
  },
  {
    title: "教师id",
    key: "teacherId",
  },
];

const typeData = {
  id: 1,
  name: "Zeng Shihan",
  identityCard: "hmFBknIEIO",
  age: 121,
  gender: "F",
  className: "Zeng Shihan",
  specialized: "7myyf0aFrn",
  academy: "O7Fy6sOueH",
  grade: "0WxQv5qyFa",
  teacherId: 82,
};
const page_size = ref<number>(16);
const totals = ref<number>(0);
const tableData = ref<typeof typeData[]>([]);
const currPage = ref<number>(1);
const pageSizes = ref<Array<number>>([10, 20, 30, 40, 50, 60, 70, 80]);
const current = ref<number>(10);
const getStudentInfo = () => {
  getStudentTern(currPage.value, page_size.value).then((res) => {
    const { total, size, data } = res.data;
    totals.value = total;
    tableData.value = data;
  });
};
getStudentInfo();

const pageChange = (page: number) => {
  currPage.value = page;
  getStudentInfo();
};
const pageSizesChange = (pageSize: number) => {
  console.log(pageSize);
  current.value = pageSize;
  currPage.value = pageSize;
  getStudentInfo();
};
</script>
