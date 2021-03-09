/*
 * Copyright 1999-2021 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react'

export const zh = {
    'button.text.search': '搜索',
    'button.text.clear': '清空',
    'button.text.on': '开启',
    'button.text.off': '关闭',

    'select.option.true': '是',
    'select.option.false': '否',

    'menu.overview': "概览",
    'menu.machine': '机器管理',
    'menu.machine.list': '机器列表',
    'menu.machine.register': '机器注册',
    'menu.machine.probe': '探针管理',
    'menu.scenario': '场景管理',
    'menu.scenario.list': '场景列表',
    'menu.scenario.category': '场景目录',
    'menu.experiment': '实验管理',
    'menu.experiment.list': '实验列表',
    'menu.experiment.task': '实验任务',
    'menu.experiment.creating': "创建实验",
    'menu.experiment.detail': '实验详情',
    'menu.chaostools': '实验工具',
    'menu.chaostools.deployed': '部署列表',
    'menu.chaostools.market': '工具市场',
    'menu.chaostools.detail': '工具详情',

    'page.pagination.total': '共{total}条',
    'page.popconfirm.ok': '确定',
    'page.popconfirm.cancel': '取消',
    'page.column.title.index': '序号',
    'page.item.required.true': '必填项',
    'page.item.required.false': '非必填项',

    'page.machine.tab.host': '主机维度',
    'page.machine.tab.host.tooltip.hostList': '显示获取到的主机机器列表，可通过 ',
    'page.machine.tab.host.tooltip.machineRegister': '机器注册',
    'page.machine.tab.host.tooltip.probeInstall': ' 页面安装探针进行机器注册。',
    'page.machine.tab.application': '应用维度',
    'page.machine.tab.application.tooltip.identity': '显示具有应用标识的机器或者集群Pods、节点资源，可通过 ',
    'page.machine.tab.application.tooltip.appRegister': ' 页面按照应用接入方式完成接入。',
    'page.machine.tab.application.tooltip.click': '点击',
    'page.machine.tab.application.tooltip.appIntroduction': '应用介绍',
    'page.machine.tab.application.tooltip.appDimensionInfo': '了解应用维度。',
    'page.machine.tab.kubernetes': 'Kubernetes 维度',
    'page.machine.tab.kubernetes.tooltip.resources': '显示采集到的集群资源数据列表，可通过 ',
    'page.machine.tab.kubernetes.tooltip.probe': ' 页面安装探针进行数据采集。',

    'page.machine.search.select.yes.no': '是 / 否',

    'page.machine.register.tab.host': '主机注册',
    'page.machine.register.tab.kubernetes': 'Kubernetes注册',
    'page.machine.register.tab.application': '应用接入说明',
    'page.machine.register.tab.probe': '探针管理',
    'page.machine.register.ansible': '通过Ansible安装',
    'page.machine.register.ssh': '通过SSH安装',
    'page.machine.register.manual': '手动安装',
    'page.machine.register.helm': '通过Helm安装',
    'page.machine.register.info.waiting': '敬请期待...',
    'page.machine.register.noMachine': '机器不存在',
    'page.machine.register.redirect.installPage': '跳转到应用接入页面',
    'page.machine.register.redirect.installInstruction': '应用接入说明',
    'page.machine.register.install.title': '选择机器安装',
    'page.machine.register.install.info.trigger': '选择下列机器进行安装，在安装时可以触发',
    'page.machine.register.install.info.moreDetail': '开关选择是否开启或关闭应用信息配置，更多的应用信息介绍详见：',
    'page.machine.register.install.info.defaultStatus': '所选择的机器默认会',
    'page.machine.register.install.info.chaosBlade': 'ChaosBlade 工具部署，可以选择开启或关闭来控制是否部署ChaosBlade工具。',

    'page.machine.register.host.tooltip.intro': '注册主机指平台感知主机的存在，用于对目标主机实现混沌实验，适用于非集群模式。实现方案是通过在目标主机部署探针，探针具备以下核心功能：',
    'page.machine.register.host.tooltip.li1': '上报主机信息注册到平台；',
    'page.machine.register.host.tooltip.li2': '维持心跳监控主机状态；',
    'page.machine.register.host.tooltip.li3': '部署混沌实验工具等；',
    'page.machine.register.host.tooltip.li4': '执行平台下发的混沌实验指令；',
    'page.machine.register.host.tooltip.support': '主机探针的安装模式目前支持：通过 Ansible 或 SSH 实现远程安装；登录目标主机手动执行命令安装；',

    'page.machine.register.k8s.tooltip.intro': '注册 Kubernetes 指获取集群 Pods、Nodes 资源数据，方便创建实验时选择目标资源做混沌实验，无需手动填写资源名称等参数，适用于集群模式。 实现方案是通过在集群里部署资源采集器探针，采集器探针具备以下核心功能：采集Pods、Nodes资源基础数据注册到平台；',
    'page.machine.register.k8s.tooltip.support': 'Kubernetes 探针的安装模式目前仅支持 Helm 安装方式。',

    'page.machine.ansible.configuration': '配置 Ansible',
    'page.machine.ansible.configuration.info1': '请在控制台服务所部署的机器配置',
    'page.machine.ansible.configuration.info2': ' ，配置完成后，点击下方的按钮同步配置信息到平台。',
    'page.machine.ansible.machine.sync': '同步机器信息',
    'page.machine.ansible.view.install.info': '查看安装详情',
    'page.machine.ansible.info.notice': '定时刷新结果，可以在探针管理页面查看',

    'page.machine.status.wait': '未安装',
    'page.machine.status.installing': '安装中',
    'page.machine.status.install.failed': '安装失败',
    'page.machine.status.online': '在线',
    'page.machine.status.offline': '离线',
    'page.machine.status.uninstalling': '卸载中',
    'page.machine.status.uninstall.failed': '卸载失败',
    'page.machine.status.baning': '禁用',

    'page.machine.host.count': '机器总数',
    'page.machine.host.activeCount': '在线机器总数',
    'page.machine.host.machineStatus': '机器状态',
    'page.machine.host.machineStatus.placeholder': '请选择机器状态',
    'page.machine.host.everChaosed': '是否演练过',
    'page.machine.host.lastChaosedTime': '最近演练时间',

    'page.machine.host.column.title.status': '机器状态',

    'page.machine.host.column.title.machineId': '机器ID',
    'page.machine.host.column.title.hostname': '机器名',
    'page.machine.host.column.title.hostname.placeholder': '请填写机器名',
    'page.machine.host.column.title.ip': '机器IP',
    'page.machine.host.column.title.ip.placeholder': '请填写机器IP',
    'page.machine.host.column.title.version': '系统版本',
    'page.machine.host.column.title.agentStatus': '探针状态',
    'page.machine.host.column.title.agentStatus.placeholder': '请选择探针状态',
    'page.machine.host.column.title.agentVersion': '探针版本',
    'page.machine.host.column.title.agentType': '探针类型',
    'page.machine.host.column.title.agentType.placeholder': '请选择探针类型',
    'page.machine.host.column.title.agentId': '探针Id',
    'page.machine.host.column.title.installTime': '安装时间',
    'page.machine.host.column.title.heartbeatTime': '心跳时间',
    'page.machine.host.column.title.relatedMachine': '对应机器',
    'page.machine.host.column.title.chaosTool': '演练工具',
    'page.machine.host.column.title.chaosed': '是否演练过',
    'page.machine.host.column.title.chaosTime': '演练时间',
    'page.machine.host.column.title.operation': '操作',
    'page.machine.host.column.title.chaosRunning': '是否演练中',

    'page.machine.host.column.operation.reinstall': '重新安装',
    'page.machine.host.column.operation.uninstall': '卸载',
    'page.machine.host.column.operation.install': '安装',
    'page.machine.host.column.operation.ban.name': '禁用',
    'page.machine.host.column.operation.unban.name': '解禁',
    'page.machine.host.column.operation.ban.pop.title': '确定要禁用吗？',
    'page.machine.host.column.operation.unban.pop.title': '确定要解禁吗？',
    'page.machine.host.column.operation.experiment.creating': '创建实验',
    'page.machine.host.column.operation.experiment.running': '演练中...',
    'page.machine.host.column.detail': '查看',
    'page.machine.host.agent.not.found': '查找不到探针',
    'page.machine.host.agent.not.found.guide': '探针不存在，请先 ',

    'page.machine.host.list.empty.info1': '没有机器数据，请先在',
    'page.machine.host.list.empty.info2': '页面注册机器',
    'page.machine.host.list.register.machine': '注册机器',
    'page.machine.host.list.search.empty': '查找不到机器',
    'page.machine.host.info': '主机信息',
    'page.machine.host.register.status.title': '注册状态',
    'page.machine.host.register.install': '安装',
    'page.machine.host.register.status.option.uninstall': '未安装',
    'page.machine.host.register.status.option.installing': '安装中',
    'page.machine.host.register.status.option.installFailed': '安装失败',
    'page.machine.host.register.status.option.installed': '已安装',
    'page.machine.host.register.status.option.offline': '离线',
    'page.machine.host.register.status.disabled': '已禁用',
    'page.machine.host.errorMessage': '错误信息',
    'page.machine.host.noResults': '探针不存在',
    'page.machine.host.bottom.click': '你也可以点击',
    'page.machine.host.bottom.detail': '详情',
    'page.machine.host.bottom.listAll': '查看全部的探针列表',

    'page.machine.k8s.info.nodeCount': '节点总数',
    'page.machine.k8s.info.namespaceCount': '命名空间总数',
    'page.machine.k8s.info.podCount': 'Pods总数',
    'page.machine.k8s.tab.node': 'Node 列表',
    'page.machine.k8s.tab.pod': 'Pod 列表',
    'page.machine.k8s.node.name': "节点名",
    'page.machine.k8s.node.name.placeholder': "请填写节点名",
    'page.machine.k8s.node.ip': "节点IP",
    'page.machine.k8s.node.ip.placeholder': "请填写节点名IP",
    'page.machine.k8s.node.status': "节点状态",
    'page.machine.k8s.node.status.placeholder': "请选择节点状态",
    'page.machine.k8s.pod.name': "Pod 名称",
    'page.machine.k8s.pod.name.placeholder': "请填写 Pod 名称",
    'page.machine.k8s.pod.ip': "Pod IP",
    'page.machine.k8s.pod.ip.placeholder': "请填写 Pod IP",
    'page.machine.k8s.pod.status': "Pod 状态",
    'page.machine.k8s.pod.status.placeholder': "请选择 Pod 状态",
    'page.machine.k8s.pod.containerList': "容器列表",
    'page.machine.k8s.namespace.name': "命名空间",
    'page.machine.k8s.namespace.name.placeholder': "请填写命名空间",

    'page.machine.app.name': "应用名",
    'page.machine.app.name.placeholder': "请填写应用名",
    'page.machine.app.count': "应用总数",
    'page.machine.app.group': "应用分组",
    'page.machine.app.group.placeholder': "请填写应用分组名",
    'page.machine.app.groupCount': "分组总数",
    'page.machine.app.machineType': "机器类型",
    'page.machine.app.machineType.placeholder': "请选择机器类型",
    'page.machine.app.machineStatus': "机器状态",
    'page.machine.app.machineStatus.placeholder': "请选择机器状态",

    // experiment
    'page.experiment.list.statistic.total': '总计',
    'page.experiment.list.statistic.running': '运行中',
    'page.experiment.list.statistic.finished': '已完成',
    'page.experiment.list.statistic.waiting': '未执行',
    'page.experiment.list.statistic.success': '成功',
    'page.experiment.list.statistic.failed': '失败',
    'page.experiment.list.statistic.operation': '操作',
    'page.experiment.list.statistic.creating': '创建实验',
    'page.experiment.list.search.name.label': '实验名称',
    'page.experiment.list.search.status.label': '实验状态',
    'page.experiment.task.status.wait': '未执行',
    'page.experiment.task.status.start.running': '启动中',
    'page.experiment.task.status.start.success': '启动成功',
    'page.experiment.task.status.start.failed': '启动失败',
    'page.experiment.task.status.end.running': '终止中',
    'page.experiment.task.status.end.success': '终止成功',
    'page.experiment.task.status.end.failed': '终止失败',
    'page.experiment.list.table.column.name': '实验名称',
    'page.experiment.list.table.column.status': '最新运行状态',
    'page.experiment.list.table.column.scenario': '场景',
    'page.experiment.list.table.column.createTime': '创建时间',
    'page.experiment.list.table.column.modifyTime': '修改时间',
    'page.experiment.list.table.column.operation': '操作',
    'page.experiment.list.table.column.latestRunningTime': '最近运行时间',
    'page.experiment.creating.host.dimension.name': '主机维度',
    'page.experiment.creating.application.dimension.name': '应用维度',
    'page.experiment.creating.kubernetes.dimension.name': 'Kubernetes 维度',
    'page.experiment.creating.step.title.resource': '选择资源',
    'page.experiment.creating.step.title.scenario': '选择场景',
    'page.experiment.creating.step.title.monitor': '接入监控',
    'page.experiment.creating.step.title.name': '填写名称',
    'page.experiment.creating.resource.host.alert.message': '请选择以下的机器进行实验',
    'page.experiment.creating.resource.k8s.collect.alert.message': '数据采集已经开启，请选择下方演练资源目标',
    'page.experiment.creating.resource.k8s.alert.message': '数据采集没有开启，需要手动填写演练资源目标',
    'page.experiment.creating.resource.disabled.tips': '机器处于已被禁用状态，在机器列表页面启用后可选',
    'page.experiment.creating.resource.disabled.message': '机器不可选',
    'page.experiment.creating.container.title': '创建 Container 实验',
    'page.experiment.creating.pod.title': '创建 Pod 实验',
    'page.experiment.creating.node.title': '创建 Node 实验',


    //scenario column title  
    'page.scenario.column.title.unique_code': '唯一码',
    'page.scenario.column.title.scenario_name': '场景名',
    'page.scenario.column.title.status': '状态',
    'page.scenario.column.title.version': '版本号',
    'page.scenario.column.title.usage_times': '调用次数',
    'page.scenario.column.title.parameters': '参数名称',
    'page.scenario.column.title.operation': '操作',
    'page.scenario.column.title.description': '描述',
    'page.scenario.column.title.source': '来源',
    'page.scenario.column.title.category': '类目',
    'page.scenario.column.title.alias': '别名',
    'page.scenario.column.title.component': '组件',
    'page.scenario.column.scenario_dimension': "场景维度",
    'page.scenario.column.scenario_category': "场景目录",

    //scenario column detail
    'page.scenario.column.detail.enable': '上架',
    'page.scenario.column.detail.disable': '下架',
    'page.scenario.column.detail.edit': '编辑',
    'page.scenario.column.detail.not_avaliable': '暂未开放',
    'page.scenario.column.detail.to_be_released': '待发布',
    'page.scenario.column.detail.released': '已发布',
    'page.scenario.column.detail.cancel': '取消',
    'page.scenario.column.detail.ok': '确认',
    'page.scenario.column.detail.modify_scenario_info': '修改场景信息',


    //scenario text prompt
    'page.scenario.prompt.scenario_name': "请填写场景名",
    'page.scenario.prompt.unique_code': "请填写唯一码",
    'page.scenario.prompt.status': "请选择场景状态",
    'page.scenario.prompt.scenario_dimension': "选择场景维度",
    'page.scenario.prompt.scenario_category': "请选择所归属的场景目录",
    'page.scenario.prompt.scenario_dimension_error': "请选择场景维度",
    'page.scenario.prompt.scenario_category_error': "请选择场景目录",

    //scenario category
    'page.scenario.category.java': 'java应用',

}
