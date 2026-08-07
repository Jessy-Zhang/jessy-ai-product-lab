---
title: 从风控产品经理的视角看OpenAI Presence
excerpt: 了解什么是 OpenAI Presence、其托管部署方式，以及可用性、安全机制和支持模式。
tags: []
---
概述

OpenAI Presence 是一个面向企业的托管式平台，用于构建、部署、运营并持续优化受治理的 AI Agent，适用于高流量、高风险的业务工作流。

Presence 将 OpenAI 模型与企业所需的管理工具结合起来，包括：

定义策略（Policy）与权限（Permission）连接企业业务系统测试 Agent 行为监控生产环境效果在需要人工判断时引入人工参与

具体功能、模型、接入渠道、容量、数据处理方式、定价以及服务承诺都会根据不同客户部署而有所不同。 

OpenAI Presence 面向哪些客户？

Presence 专为以下类型组织设计：

大规模运营流程高度标准化、可重复对治理能力要求高对可靠性要求高需要严格运营监管

目前客服（Customer Support）和语音服务（Voice）是重点应用方向，但也支持：

面向客户（Customer-facing）的业务流程企业内部（Internal）的业务流程

目前 Presence 采用 有限开放（Limited GA） 的方式提供，是一种托管部署服务，不属于自助开通产品。客户是否能够接入，取决于：业务场景是否匹配实施准备情况OpenAI 的交付资源情况

Presence Agent 能做什么？

Presence Agent 可以被配置为：

遵循企业批准的指令、SOP 和组织政策使用授权知识库通过 API 和工具访问企业系统查询信息更新业务系统执行被授权的操作通过语音或聊天渠道与用户交互在需要人工判断时升级给真人处理，最终能力和集成范围会在项目技术设计阶段确定。 

Presence Agent 如何进行治理？

Presence 提供生产级 Agent 治理与运营能力，包括：

上线前测试

工作流模拟（Simulation）自动评测（Evaluation）边界场景测试（Edge Cases）

行为约束

Guardrails（护栏机制）权限控制审批流程

运营观测

会话记录操作历史质量指标

人工接管

向人工团队升级（Escalation）自动携带上下文信息

发布管理

灰度发布版本监控回滚机制

这些能力帮助企业在保持控制权的前提下，持续评估和优化 Agent。 

部署流程

OpenAI 驻场工程师（Forward Deployed Engineers）、合作伙伴，或双方共同参与部署，通常包括：

明确业务目标与成功标准接入企业系统配置策略、权限和升级流程完成安全、隐私与法务审查执行模拟测试和验收测试控制性上线并监控结果根据运行数据持续迭代优化

OpenAI 特别强调：Agent 并不会因为“导入了一堆文档”就自动达到生产可用水平。

每次部署都需要：需求定义系统集成测试验证审查批准后才能上线。 

支持哪些渠道？

当前 Limited GA 阶段支持：Voice（语音）Chat（聊天）

对于每个客户部署，还会单独确认：呼叫中心系统集成路由策略用户认证方式人工接管机制

使用哪些 OpenAI 模型？

Presence 使用 OpenAI 模型。

根据业务场景，系统可能组合：实时交互模型（Real-time）深度推理模型（Reasoning）Tool Calling 执行能力

具体模型配置会根据业务不断调整优化。 

数据、隐私和安全如何处理？

每个部署项目都单独定义和审查数据策略，不同 Presence 项目之间的数据架构可能不同，因此最终以部署方案文档及合同约定为准。 

Presence 与 ChatGPT Workspace Agents 有什么区别？

ChatGPT Workspace Agents

在 ChatGPT Workspace 或 Slack 中创建用户自行创建和管理偏协作和知识助手场景

OpenAI Presence

独立产品面向生产级业务流程强调系统集成强调测试与治理强调监控与运营有 OpenAI 或合作伙伴参与部署

Presence Agent 不是通过 ChatGPT Agent 界面创建的，而是通过项目方式实施交付。 [\[help.openai.com]](https://help.openai.com/en/articles/20001405-openai-presence)

如何申请 OpenAI Presence？

需要联系 OpenAI Account Team。

OpenAI 会评估：客户资格场景匹配度实施成熟度交付能力，价格和实施范围均按项目定制。

产品经理视角解读

从定义上看，OpenAI Presence 本质上已经不是单纯 Agent Builder，而更接近 AI Native 的 Genesys / Salesforce Service Cloud + Agent 平台：

Agent 开发权限治理安全审计生产监控人工接管持续评估企业系统集成，全部打包为托管服务。 

对于你做 AI 安全平台产品的背景来说，特别值得关注的是它强调的几个关键词：

Governance（治理）Guardrails（护栏）Evaluation（评测）Human Escalation（人工升级）Production Monitoring（生产监控）

这几乎就是把传统内容安全/风控平台的治理思想迁移到了 Agent 时代。Presence 可以理解为 OpenAI 正式推出的「企业级 AgentOps + AI Governance 平台」。
