const answers = [
  {
    id: "allocation",
    label: "调拨单数据不一致",
    question: "调拨单数据不一致怎么办？",
    judgement:
      "这类问题通常属于调拨单据流未闭环，或者调出、调入双方在商品编码、数量、单位、单据状态上存在不一致。",
    steps: [
      "先核对调拨单号、商品编码、规格、单位和出入库数量是否一致。",
      "查看调拨申请、调拨出库、调拨入库三个环节是否都已完成审核。",
      "确认是否发生过少发、少收、补发、退回或重复操作。",
      "如存在实物差异，先留存照片和交接记录，再决定补发、退回或改单。"
    ],
    confirm: [
      "调出方和调入方名称",
      "调拨单当前状态",
      "出库时间、入库时间、交接记录",
      "是否存在在途库存未清"
    ],
    risks: [
      "未查清原因前直接调账，会掩盖真实问题。",
      "只看出库不看入库，容易误判调拨已完成。",
      "收货方不核对直接入库，会把错货固化为系统正确数据。"
    ],
    next: [
      "处理完成后复核双方库存是否同步恢复。",
      "检查该单据是否仍挂在在途状态。",
      "把异常原因沉淀到 FAQ 或培训材料里，减少重复问题。"
    ]
  },
  {
    id: "inventory",
    label: "门店库存异常",
    question: "门店库存异常要先查哪些信息？",
    judgement:
      "门店库存异常通常要先区分是账实不符、单据未做完，还是系统同步延迟，不能一开始就把问题归到盘点差异。",
    steps: [
      "先锁定异常门店、商品和发生时间，保存当前库存截图。",
      "核对系统库存、可用库存、锁定库存、在途库存四个口径。",
      "按时间顺序检查销售、收货、调拨、盘点、报损等最近单据。",
      "如有必要联系门店现场抽盘，确认是否存在待上架、待退回或错放商品。"
    ],
    confirm: [
      "商品编码、商品名称、规格",
      "异常发生日期和班次",
      "最近一次盘点记录",
      "是否有手工调整或紧急改单"
    ],
    risks: [
      "未留异常快照就处理，后续很难复盘。",
      "只看总库存不看锁定和在途，容易误判是否可售。",
      "门店口头反馈不能代替正式盘点结果。"
    ],
    next: [
      "如发现单据缺失，补录后再次核对库存。",
      "如属于现场差异，发起盘点调整并保留说明。",
      "如属于系统问题，整理证据后提交系统支持。"
    ]
  },
  {
    id: "master-data",
    label: "商品资料维护",
    question: "商品资料维护前要检查什么？",
    judgement:
      "重点是先防止重复建档，再确认主数据关键字段是否完整且彼此一致，避免后续影响采购、销售和库存口径。",
    steps: [
      "先按商品编码、条码、名称关键词和规格组合进行查重。",
      "确认名称、规格、单位、条码、分类、品牌、税率、价格等核心字段。",
      "如果是修改已有商品，要评估是否影响现有库存、在途订单和促销活动。",
      "提交审核前，至少复查一次条码唯一性和价格字段。"
    ],
    confirm: [
      "商品编码或申请编号",
      "条码是否唯一",
      "供应商和税率信息",
      "生效日期和停用日期"
    ],
    risks: [
      "重复建档会造成一物多档，后续合并成本很高。",
      "在营业时段直接改售价，可能导致 POS 与 ERP 不一致。",
      "有在途单据时修改单位或规格，会影响数量换算。"
    ],
    next: [
      "审核通过后在销售端或门店端做一次抽查验证。",
      "把申请单、截图和审批记录留档。",
      "如果是高频出错字段，可以单独整理为风险清单。"
    ]
  },
  {
    id: "sales",
    label: "销售库存对账",
    question: "销售数据和库存数据对不上怎么排查？",
    judgement:
      "这类问题大多不是单纯报表异常，而是数据口径、接口同步、退货回库或条码识别逻辑中的某一个环节出了偏差。",
    steps: [
      "先统一核对口径，确认是否含税、是否包含退货、是否按交易时间统计。",
      "对比销售流水、销售汇总、库存扣减、退货记录和商品主数据。",
      "优先下钻异常门店、异常商品、异常日期，再定位具体单号。",
      "如出现有销售无扣减，重点检查 POS 到 ERP 的传输和审核状态。"
    ],
    confirm: [
      "统计周期和时间口径",
      "销售额还是净销售额",
      "是否包含赠品、取消单和退货单",
      "异常商品是否为组合商品或活动商品"
    ],
    risks: [
      "不先统一口径，容易把正常差异误判成系统错误。",
      "只核对金额不核对数量，会漏掉单位换算问题。",
      "忽略退货回库，会导致销售和库存看起来长期不一致。"
    ],
    next: [
      "把差异定位到门店、商品或单据后再分配处理责任。",
      "必要时与财务确认报表口径是否一致。",
      "把常见差异原因补充到知识库，形成标准排查路径。"
    ]
  },
  {
    id: "newbie",
    label: "新人操作注意事项",
    question: "新员工做 ERP 操作时有哪些注意事项？",
    judgement:
      "新员工最常见的问题不是不会点按钮，而是不清楚业务背景、口径和风险控制点，所以要先建立正确的操作顺序和留痕意识。",
    steps: [
      "先确认自己处理的是哪类业务：主数据、库存、调拨、价格还是报表。",
      "在操作前核对单据编号、商品信息、时间范围和当前状态。",
      "遇到改价、调账、改单、停用等高风险动作时先暂停并请上级复核。",
      "操作后保存截图、备注和审批记录，确保过程可追溯。"
    ],
    confirm: [
      "当前问题影响的是哪个模块",
      "是否有明确审批或操作依据",
      "是否已通知相关责任人",
      "是否会影响门店销售、库存或财务口径"
    ],
    risks: [
      "凭经验猜着操作，容易把小问题变成系统性差异。",
      "共用账号会导致责任无法追溯。",
      "没有证据就改数据，后续很难复盘或说明原因。"
    ],
    next: [
      "把高频问题整理成班前培训清单。",
      "把高风险操作设置成必须审核或必须备注。",
      "鼓励新人先查询 SOP，再执行实际操作。"
    ]
  }
];

const elements = {
  chipGroup: document.getElementById("question-chips"),
  selectedQuestion: document.getElementById("selected-question"),
  judgement: document.getElementById("module-judgement"),
  steps: document.getElementById("module-steps"),
  confirm: document.getElementById("module-confirm"),
  risks: document.getElementById("module-risks"),
  next: document.getElementById("module-next")
};

function renderParagraph(text) {
  return `<p>${text}</p>`;
}

function renderList(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function setActiveAnswer(id) {
  const answer = answers.find((item) => item.id === id) || answers[0];

  elements.selectedQuestion.textContent = answer.question;
  elements.judgement.innerHTML = renderParagraph(answer.judgement);
  elements.steps.innerHTML = renderList(answer.steps);
  elements.confirm.innerHTML = renderList(answer.confirm);
  elements.risks.innerHTML = renderList(answer.risks);
  elements.next.innerHTML = renderList(answer.next);

  document.querySelectorAll(".chip-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.id === answer.id);
  });
}

function renderChips() {
  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip-button";
    button.dataset.id = answer.id;
    button.textContent = answer.label;
    button.addEventListener("click", () => setActiveAnswer(answer.id));
    elements.chipGroup.appendChild(button);
  });
}

renderChips();
setActiveAnswer(answers[0].id);
