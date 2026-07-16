const graphData = {
 "nodes": [
  {
   "id": "AI Agent Workflows",
   "group": "03-Programming-Tools",
   "degree": 3,
   "isHub": false,
   "path": "03-Programming-Tools/AI Agent Workflows.md",
   "excerpt": "把大模型从\"聊天\"用成\"流程\":可复用的提示词模板 + 工具调用 + 协作日志。"
  },
  {
   "id": "Advanced SQL",
   "group": "04-Databases-SQL",
   "degree": 3,
   "isHub": false,
   "path": "04-Databases-SQL/Advanced SQL.md",
   "excerpt": "窗口函数和 CTE 是分析型 SQL 的分水岭。"
  },
  {
   "id": "Bayesian Statistics",
   "group": "02-Statistics",
   "degree": 4,
   "isHub": false,
   "path": "02-Statistics/Bayesian Statistics.md",
   "excerpt": "把参数当作随机变量:先验 + 数据 = 后验,信念随证据更新。"
  },
  {
   "id": "Big Data Frameworks",
   "group": "08-Data-Engineering",
   "degree": 4,
   "isHub": false,
   "path": "08-Data-Engineering/Big Data Frameworks.md",
   "excerpt": "单机放不下时的分布式方案——但先确认你真的需要它。"
  },
  {
   "id": "Calculus",
   "group": "01-Mathematics",
   "degree": 4,
   "isHub": false,
   "path": "01-Mathematics/Calculus.md",
   "excerpt": "导数告诉模型往哪里走——梯度是所有训练算法的方向盘。"
  },
  {
   "id": "Clustering",
   "group": "05-Machine-Learning",
   "degree": 3,
   "isHub": false,
   "path": "05-Machine-Learning/Clustering.md",
   "excerpt": "没有标签时找结构:让相似的样本自动聚在一起。"
  },
  {
   "id": "Convolutional Neural Networks",
   "group": "06-Deep-Learning",
   "degree": 3,
   "isHub": false,
   "path": "06-Deep-Learning/Convolutional Neural Networks.md",
   "excerpt": "用局部感受野和权重共享榨取图像的空间结构。"
  },
  {
   "id": "Data Cleaning",
   "group": "08-Data-Engineering",
   "degree": 6,
   "isHub": false,
   "path": "08-Data-Engineering/Data Cleaning.md",
   "excerpt": "真实数据 80% 的时间花在这里:缺失、重复、异常、不一致。"
  },
  {
   "id": "Data Engineering MOC",
   "group": "08-Data-Engineering",
   "degree": 5,
   "isHub": true,
   "path": "08-Data-Engineering/Data Engineering MOC.md",
   "excerpt": "让数据可靠地流动:从原始数据到可用数据,从模型到生产。"
  },
  {
   "id": "Data Pipelines and ETL",
   "group": "08-Data-Engineering",
   "degree": 4,
   "isHub": false,
   "path": "08-Data-Engineering/Data Pipelines and ETL.md",
   "excerpt": "Extract-Transform-Load:让数据定时、可靠、可监控地从源头流向仓库。"
  },
  {
   "id": "Data Visualization MOC",
   "group": "07-Data-Visualization",
   "degree": 4,
   "isHub": true,
   "path": "07-Data-Visualization/Data Visualization MOC.md",
   "excerpt": "一图胜千言——前提是图画得对。"
  },
  {
   "id": "Database Design",
   "group": "04-Databases-SQL",
   "degree": 4,
   "isHub": false,
   "path": "04-Databases-SQL/Database Design.md",
   "excerpt": "好的表结构让查询自然,坏的表结构让每个查询都痛苦。"
  },
  {
   "id": "Databases and SQL MOC",
   "group": "04-Databases-SQL",
   "degree": 5,
   "isHub": true,
   "path": "04-Databases-SQL/Databases and SQL MOC.md",
   "excerpt": "数据住在哪里,怎么把它取出来。"
  },
  {
   "id": "Decision Trees and Ensembles",
   "group": "05-Machine-Learning",
   "degree": 4,
   "isHub": false,
   "path": "05-Machine-Learning/Decision Trees and Ensembles.md",
   "excerpt": "表格数据的王者:XGBoost / LightGBM 至今仍是 Kaggle 主力。"
  },
  {
   "id": "Deep Learning MOC",
   "group": "06-Deep-Learning",
   "degree": 7,
   "isHub": true,
   "path": "06-Deep-Learning/Deep Learning MOC.md",
   "excerpt": "用多层神经网络自动学习特征表示。"
  },
  {
   "id": "Descriptive Statistics",
   "group": "02-Statistics",
   "degree": 10,
   "isHub": false,
   "path": "02-Statistics/Descriptive Statistics.md",
   "excerpt": "看数据的第一步:集中趋势、离散程度、分布形状。"
  },
  {
   "id": "Development Environment",
   "group": "03-Programming-Tools",
   "degree": 4,
   "isHub": false,
   "path": "03-Programming-Tools/Development Environment.md",
   "excerpt": "可复现的环境 = 可复现的结果。"
  },
  {
   "id": "Dimensionality Reduction",
   "group": "05-Machine-Learning",
   "degree": 5,
   "isHub": false,
   "path": "05-Machine-Learning/Dimensionality Reduction.md",
   "excerpt": "压缩维度、保留信息:既为了可视化,也为了对抗维度灾难。"
  },
  {
   "id": "Experiment Design and AB Testing",
   "group": "02-Statistics",
   "degree": 3,
   "isHub": false,
   "path": "02-Statistics/Experiment Design and AB Testing.md",
   "excerpt": "因果结论只能来自受控实验——AB 测试是业务中最常用的形式。"
  },
  {
   "id": "Exploratory Data Analysis",
   "group": "02-Statistics",
   "degree": 7,
   "isHub": false,
   "path": "02-Statistics/Exploratory Data Analysis.md",
   "excerpt": "建模前先\"看\"数据:EDA 是假设的产生器,不是走过场。"
  },
  {
   "id": "Feature Engineering",
   "group": "05-Machine-Learning",
   "degree": 9,
   "isHub": false,
   "path": "05-Machine-Learning/Feature Engineering.md",
   "excerpt": "\"数据和特征决定上限,模型只是逼近这个上限。\""
  },
  {
   "id": "Git and Version Control",
   "group": "03-Programming-Tools",
   "degree": 4,
   "isHub": false,
   "path": "03-Programming-Tools/Git and Version Control.md",
   "excerpt": "代码和笔记的时光机——本知识库就靠它同步到 GitHub。"
  },
  {
   "id": "Hypothesis Testing",
   "group": "02-Statistics",
   "degree": 6,
   "isHub": false,
   "path": "02-Statistics/Hypothesis Testing.md",
   "excerpt": "用数据回答\"这个差异是真实的还是碰巧的\"。"
  },
  {
   "id": "Information Theory",
   "group": "01-Mathematics",
   "degree": 7,
   "isHub": false,
   "path": "01-Mathematics/Information Theory.md",
   "excerpt": "用\"信息量\"度量不确定性:熵、交叉熵、KL 散度是损失函数的源头。"
  },
  {
   "id": "Interactive Visualization",
   "group": "07-Data-Visualization",
   "degree": 3,
   "isHub": false,
   "path": "07-Data-Visualization/Interactive Visualization.md",
   "excerpt": "让读者自己探索数据:悬停、缩放、筛选。"
  },
  {
   "id": "KNN and Naive Bayes",
   "group": "05-Machine-Learning",
   "degree": 3,
   "isHub": false,
   "path": "05-Machine-Learning/KNN and Naive Bayes.md",
   "excerpt": "两个\"简单却常常够用\"的模型:一个靠邻居投票,一个靠概率相乘。"
  },
  {
   "id": "Kaggle Notes",
   "group": "09-Projects",
   "degree": 5,
   "isHub": false,
   "path": "09-Projects/Kaggle Notes.md",
   "excerpt": "最好的练兵场:真实数据 + 排行榜反馈 + 顶级选手的公开方案。"
  },
  {
   "id": "Large Language Models",
   "group": "06-Deep-Learning",
   "degree": 5,
   "isHub": false,
   "path": "06-Deep-Learning/Large Language Models.md",
   "excerpt": "预测下一个 token 的超大 Transformer,涌现出通用能力。"
  },
  {
   "id": "Linear Algebra",
   "group": "01-Mathematics",
   "degree": 5,
   "isHub": false,
   "path": "01-Mathematics/Linear Algebra.md",
   "excerpt": "数据即矩阵,变换即乘法——几乎所有模型的底层表达。"
  },
  {
   "id": "Linear Models",
   "group": "05-Machine-Learning",
   "degree": 6,
   "isHub": false,
   "path": "05-Machine-Learning/Linear Models.md",
   "excerpt": "可解释、快、稳——永远值得先试的基线模型。"
  },
  {
   "id": "MLOps",
   "group": "08-Data-Engineering",
   "degree": 5,
   "isHub": false,
   "path": "08-Data-Engineering/MLOps.md",
   "excerpt": "让模型从 notebook 走进生产并持续可靠:训练、部署、监控的工程化。"
  },
  {
   "id": "Machine Learning MOC",
   "group": "05-Machine-Learning",
   "degree": 10,
   "isHub": true,
   "path": "05-Machine-Learning/Machine Learning MOC.md",
   "excerpt": "让程序从数据中学习规律,而不是被逐条编程。"
  },
  {
   "id": "Mathematics MOC",
   "group": "01-Mathematics",
   "degree": 6,
   "isHub": true,
   "path": "01-Mathematics/Mathematics MOC.md",
   "excerpt": "数据科学的地基:模型的语言是线性代数,学习的引擎是最优化,不确定性的语言是概率。"
  },
  {
   "id": "Matplotlib and Seaborn",
   "group": "07-Data-Visualization",
   "degree": 6,
   "isHub": false,
   "path": "07-Data-Visualization/Matplotlib and Seaborn.md",
   "excerpt": "Python 静态绘图的标配:Matplotlib 管一切,Seaborn 管好看。"
  },
  {
   "id": "Model Evaluation and Tuning",
   "group": "05-Machine-Learning",
   "degree": 9,
   "isHub": false,
   "path": "05-Machine-Learning/Model Evaluation and Tuning.md",
   "excerpt": "不会评估就不会建模——指标选错,努力全废。"
  },
  {
   "id": "Neural Network Basics",
   "group": "06-Deep-Learning",
   "degree": 8,
   "isHub": false,
   "path": "06-Deep-Learning/Neural Network Basics.md",
   "excerpt": "线性变换 + 非线性激活的层层堆叠 = 万能函数逼近器。"
  },
  {
   "id": "NoSQL Overview",
   "group": "04-Databases-SQL",
   "degree": 3,
   "isHub": false,
   "path": "04-Databases-SQL/NoSQL Overview.md",
   "excerpt": "当数据不是整齐的表格时的选择:文档、键值、列族、图。"
  },
  {
   "id": "Note Template",
   "group": "Templates",
   "degree": 1,
   "isHub": false,
   "path": "Templates/Note Template.md",
   "excerpt": ""
  },
  {
   "id": "NumPy",
   "group": "03-Programming-Tools",
   "degree": 5,
   "isHub": false,
   "path": "03-Programming-Tools/NumPy.md",
   "excerpt": "向量化计算的基石:用数组运算替代 for 循环,快百倍。"
  },
  {
   "id": "Optimization",
   "group": "01-Mathematics",
   "degree": 5,
   "isHub": false,
   "path": "01-Mathematics/Optimization.md",
   "excerpt": "\"训练模型\"的本质就是解一个最优化问题。"
  },
  {
   "id": "Pandas",
   "group": "03-Programming-Tools",
   "degree": 9,
   "isHub": false,
   "path": "03-Programming-Tools/Pandas.md",
   "excerpt": "表格数据的瑞士军刀:读取、清洗、变换、聚合一条龙。"
  },
  {
   "id": "Portfolio Building",
   "group": "09-Projects",
   "degree": 4,
   "isHub": false,
   "path": "09-Projects/Portfolio Building.md",
   "excerpt": "GitHub 是数据科学家的简历附件:3 个深入的项目胜过 10 个 fork。"
  },
  {
   "id": "Probability Theory",
   "group": "01-Mathematics",
   "degree": 6,
   "isHub": false,
   "path": "01-Mathematics/Probability Theory.md",
   "excerpt": "量化不确定性的语言,是统计推断和生成模型的共同地基。"
  },
  {
   "id": "Programming and Tools MOC",
   "group": "03-Programming-Tools",
   "degree": 7,
   "isHub": true,
   "path": "03-Programming-Tools/Programming and Tools MOC.md",
   "excerpt": "把想法变成可运行分析的手艺。"
  },
  {
   "id": "Project Template",
   "group": "09-Projects",
   "degree": 11,
   "isHub": false,
   "path": "09-Projects/Project Template.md",
   "excerpt": "端到端数据科学项目的标准骨架(CRISP-DM 思路)。"
  },
  {
   "id": "Projects MOC",
   "group": "09-Projects",
   "degree": 4,
   "isHub": true,
   "path": "09-Projects/Projects MOC.md",
   "excerpt": "知识只有用过才是自己的。"
  },
  {
   "id": "PyTorch in Practice",
   "group": "06-Deep-Learning",
   "degree": 4,
   "isHub": false,
   "path": "06-Deep-Learning/PyTorch in Practice.md",
   "excerpt": "研究界事实标准的深度学习框架:动态图,像写 Python 一样写网络。"
  },
  {
   "id": "Python Basics",
   "group": "03-Programming-Tools",
   "degree": 4,
   "isHub": false,
   "path": "03-Programming-Tools/Python Basics.md",
   "excerpt": "数据科学的通用语言:简洁语法 + 最丰富的生态。"
  },
  {
   "id": "RNNs and Sequence Models",
   "group": "06-Deep-Learning",
   "degree": 4,
   "isHub": false,
   "path": "06-Deep-Learning/RNNs and Sequence Models.md",
   "excerpt": "带记忆的网络处理变长序列——虽已被 Transformer 大面积取代,思想仍重要。"
  },
  {
   "id": "Regression Analysis",
   "group": "02-Statistics",
   "degree": 4,
   "isHub": false,
   "path": "02-Statistics/Regression Analysis.md",
   "excerpt": "用统计视角理解变量之间的关系,是解释性建模的主力。"
  },
  {
   "id": "SQL Fundamentals",
   "group": "04-Databases-SQL",
   "degree": 3,
   "isHub": false,
   "path": "04-Databases-SQL/SQL Fundamentals.md",
   "excerpt": "数据分析师使用频率最高的语言,没有之一。"
  },
  {
   "id": "Statistics MOC",
   "group": "02-Statistics",
   "degree": 8,
   "isHub": true,
   "path": "02-Statistics/Statistics MOC.md",
   "excerpt": "从数据到结论的科学:描述它、推断它、验证它。"
  },
  {
   "id": "Supervised Learning Overview",
   "group": "05-Machine-Learning",
   "degree": 4,
   "isHub": false,
   "path": "05-Machine-Learning/Supervised Learning Overview.md",
   "excerpt": "有标签的学习:回归预测数值,分类预测类别。"
  },
  {
   "id": "Support Vector Machines",
   "group": "05-Machine-Learning",
   "degree": 3,
   "isHub": false,
   "path": "05-Machine-Learning/Support Vector Machines.md",
   "excerpt": "最大化分类间隔;核技巧把线性不可分变成可分。"
  },
  {
   "id": "Time Series Analysis",
   "group": "02-Statistics",
   "degree": 5,
   "isHub": false,
   "path": "02-Statistics/Time Series Analysis.md",
   "excerpt": "带时间箭头的数据自成一派:平稳性是前提,防泄漏是纪律。"
  },
  {
   "id": "Transformers and Attention",
   "group": "06-Deep-Learning",
   "degree": 3,
   "isHub": false,
   "path": "06-Deep-Learning/Transformers and Attention.md",
   "excerpt": "\"Attention is All You Need\"——并行处理序列,现代 AI 的统一架构。"
  },
  {
   "id": "Visualization Design Principles",
   "group": "07-Data-Visualization",
   "degree": 5,
   "isHub": false,
   "path": "07-Data-Visualization/Visualization Design Principles.md",
   "excerpt": "图表是论证,不是装饰:每个视觉元素都应服务于信息传递。"
  },
  {
   "id": "🌌 Data Science Second Brain",
   "group": "00-Home",
   "degree": 11,
   "isHub": true,
   "path": "00-Home/🌌 Data Science Second Brain.md",
   "excerpt": ""
  }
 ],
 "links": [
  {
   "source": "AI Agent Workflows",
   "target": "Large Language Models",
   "weight": 1
  },
  {
   "source": "AI Agent Workflows",
   "target": "Programming and Tools MOC",
   "weight": 2
  },
  {
   "source": "AI Agent Workflows",
   "target": "🌌 Data Science Second Brain",
   "weight": 1
  },
  {
   "source": "Advanced SQL",
   "target": "Data Pipelines and ETL",
   "weight": 2
  },
  {
   "source": "Advanced SQL",
   "target": "Databases and SQL MOC",
   "weight": 2
  },
  {
   "source": "Advanced SQL",
   "target": "SQL Fundamentals",
   "weight": 2
  },
  {
   "source": "Bayesian Statistics",
   "target": "Hypothesis Testing",
   "weight": 1
  },
  {
   "source": "Bayesian Statistics",
   "target": "KNN and Naive Bayes",
   "weight": 1
  },
  {
   "source": "Bayesian Statistics",
   "target": "Probability Theory",
   "weight": 2
  },
  {
   "source": "Bayesian Statistics",
   "target": "Statistics MOC",
   "weight": 2
  },
  {
   "source": "Big Data Frameworks",
   "target": "Data Engineering MOC",
   "weight": 2
  },
  {
   "source": "Big Data Frameworks",
   "target": "Data Pipelines and ETL",
   "weight": 2
  },
  {
   "source": "Big Data Frameworks",
   "target": "Database Design",
   "weight": 1
  },
  {
   "source": "Big Data Frameworks",
   "target": "NoSQL Overview",
   "weight": 2
  },
  {
   "source": "Calculus",
   "target": "Mathematics MOC",
   "weight": 2
  },
  {
   "source": "Calculus",
   "target": "Neural Network Basics",
   "weight": 2
  },
  {
   "source": "Calculus",
   "target": "Optimization",
   "weight": 2
  },
  {
   "source": "Calculus",
   "target": "Probability Theory",
   "weight": 1
  },
  {
   "source": "Clustering",
   "target": "Descriptive Statistics",
   "weight": 1
  },
  {
   "source": "Clustering",
   "target": "Dimensionality Reduction",
   "weight": 2
  },
  {
   "source": "Clustering",
   "target": "Machine Learning MOC",
   "weight": 2
  },
  {
   "source": "Convolutional Neural Networks",
   "target": "Deep Learning MOC",
   "weight": 2
  },
  {
   "source": "Convolutional Neural Networks",
   "target": "Neural Network Basics",
   "weight": 1
  },
  {
   "source": "Convolutional Neural Networks",
   "target": "PyTorch in Practice",
   "weight": 1
  },
  {
   "source": "Data Cleaning",
   "target": "Data Engineering MOC",
   "weight": 2
  },
  {
   "source": "Data Cleaning",
   "target": "Descriptive Statistics",
   "weight": 1
  },
  {
   "source": "Data Cleaning",
   "target": "Exploratory Data Analysis",
   "weight": 1
  },
  {
   "source": "Data Cleaning",
   "target": "Feature Engineering",
   "weight": 2
  },
  {
   "source": "Data Cleaning",
   "target": "Pandas",
   "weight": 2
  },
  {
   "source": "Data Cleaning",
   "target": "Project Template",
   "weight": 1
  },
  {
   "source": "Data Engineering MOC",
   "target": "Data Pipelines and ETL",
   "weight": 2
  },
  {
   "source": "Data Engineering MOC",
   "target": "MLOps",
   "weight": 2
  },
  {
   "source": "Data Engineering MOC",
   "target": "🌌 Data Science Second Brain",
   "weight": 2
  },
  {
   "source": "Data Pipelines and ETL",
   "target": "Database Design",
   "weight": 2
  },
  {
   "source": "Data Visualization MOC",
   "target": "Interactive Visualization",
   "weight": 2
  },
  {
   "source": "Data Visualization MOC",
   "target": "Matplotlib and Seaborn",
   "weight": 2
  },
  {
   "source": "Data Visualization MOC",
   "target": "Visualization Design Principles",
   "weight": 2
  },
  {
   "source": "Data Visualization MOC",
   "target": "🌌 Data Science Second Brain",
   "weight": 2
  },
  {
   "source": "Database Design",
   "target": "Databases and SQL MOC",
   "weight": 2
  },
  {
   "source": "Database Design",
   "target": "NoSQL Overview",
   "weight": 1
  },
  {
   "source": "Databases and SQL MOC",
   "target": "NoSQL Overview",
   "weight": 2
  },
  {
   "source": "Databases and SQL MOC",
   "target": "SQL Fundamentals",
   "weight": 2
  },
  {
   "source": "Databases and SQL MOC",
   "target": "🌌 Data Science Second Brain",
   "weight": 2
  },
  {
   "source": "Decision Trees and Ensembles",
   "target": "Information Theory",
   "weight": 2
  },
  {
   "source": "Decision Trees and Ensembles",
   "target": "Kaggle Notes",
   "weight": 2
  },
  {
   "source": "Decision Trees and Ensembles",
   "target": "Machine Learning MOC",
   "weight": 2
  },
  {
   "source": "Decision Trees and Ensembles",
   "target": "Model Evaluation and Tuning",
   "weight": 1
  },
  {
   "source": "Deep Learning MOC",
   "target": "Large Language Models",
   "weight": 2
  },
  {
   "source": "Deep Learning MOC",
   "target": "Neural Network Basics",
   "weight": 2
  },
  {
   "source": "Deep Learning MOC",
   "target": "PyTorch in Practice",
   "weight": 2
  },
  {
   "source": "Deep Learning MOC",
   "target": "RNNs and Sequence Models",
   "weight": 2
  },
  {
   "source": "Deep Learning MOC",
   "target": "Transformers and Attention",
   "weight": 2
  },
  {
   "source": "Deep Learning MOC",
   "target": "🌌 Data Science Second Brain",
   "weight": 2
  },
  {
   "source": "Descriptive Statistics",
   "target": "Experiment Design and AB Testing",
   "weight": 1
  },
  {
   "source": "Descriptive Statistics",
   "target": "Exploratory Data Analysis",
   "weight": 1
  },
  {
   "source": "Descriptive Statistics",
   "target": "Matplotlib and Seaborn",
   "weight": 1
  },
  {
   "source": "Descriptive Statistics",
   "target": "Pandas",
   "weight": 1
  },
  {
   "source": "Descriptive Statistics",
   "target": "Probability Theory",
   "weight": 2
  },
  {
   "source": "Descriptive Statistics",
   "target": "Project Template",
   "weight": 1
  },
  {
   "source": "Descriptive Statistics",
   "target": "Statistics MOC",
   "weight": 2
  },
  {
   "source": "Descriptive Statistics",
   "target": "Visualization Design Principles",
   "weight": 1
  },
  {
   "source": "Development Environment",
   "target": "Git and Version Control",
   "weight": 2
  },
  {
   "source": "Development Environment",
   "target": "MLOps",
   "weight": 2
  },
  {
   "source": "Development Environment",
   "target": "Programming and Tools MOC",
   "weight": 2
  },
  {
   "source": "Development Environment",
   "target": "Python Basics",
   "weight": 2
  },
  {
   "source": "Dimensionality Reduction",
   "target": "Interactive Visualization",
   "weight": 2
  },
  {
   "source": "Dimensionality Reduction",
   "target": "KNN and Naive Bayes",
   "weight": 2
  },
  {
   "source": "Dimensionality Reduction",
   "target": "Linear Algebra",
   "weight": 3
  },
  {
   "source": "Dimensionality Reduction",
   "target": "Machine Learning MOC",
   "weight": 2
  },
  {
   "source": "Experiment Design and AB Testing",
   "target": "Hypothesis Testing",
   "weight": 2
  },
  {
   "source": "Experiment Design and AB Testing",
   "target": "Statistics MOC",
   "weight": 2
  },
  {
   "source": "Exploratory Data Analysis",
   "target": "Matplotlib and Seaborn",
   "weight": 1
  },
  {
   "source": "Exploratory Data Analysis",
   "target": "Pandas",
   "weight": 1
  },
  {
   "source": "Exploratory Data Analysis",
   "target": "Project Template",
   "weight": 1
  },
  {
   "source": "Exploratory Data Analysis",
   "target": "Statistics MOC",
   "weight": 2
  },
  {
   "source": "Exploratory Data Analysis",
   "target": "Visualization Design Principles",
   "weight": 1
  },
  {
   "source": "Feature Engineering",
   "target": "Information Theory",
   "weight": 2
  },
  {
   "source": "Feature Engineering",
   "target": "Kaggle Notes",
   "weight": 1
  },
  {
   "source": "Feature Engineering",
   "target": "Machine Learning MOC",
   "weight": 2
  },
  {
   "source": "Feature Engineering",
   "target": "Model Evaluation and Tuning",
   "weight": 1
  },
  {
   "source": "Feature Engineering",
   "target": "Pandas",
   "weight": 1
  },
  {
   "source": "Feature Engineering",
   "target": "Project Template",
   "weight": 1
  },
  {
   "source": "Feature Engineering",
   "target": "Supervised Learning Overview",
   "weight": 1
  },
  {
   "source": "Feature Engineering",
   "target": "Time Series Analysis",
   "weight": 1
  },
  {
   "source": "Git and Version Control",
   "target": "MLOps",
   "weight": 2
  },
  {
   "source": "Git and Version Control",
   "target": "Portfolio Building",
   "weight": 1
  },
  {
   "source": "Git and Version Control",
   "target": "Programming and Tools MOC",
   "weight": 2
  },
  {
   "source": "Hypothesis Testing",
   "target": "Model Evaluation and Tuning",
   "weight": 1
  },
  {
   "source": "Hypothesis Testing",
   "target": "Probability Theory",
   "weight": 2
  },
  {
   "source": "Hypothesis Testing",
   "target": "Regression Analysis",
   "weight": 1
  },
  {
   "source": "Hypothesis Testing",
   "target": "Statistics MOC",
   "weight": 2
  },
  {
   "source": "Information Theory",
   "target": "Large Language Models",
   "weight": 1
  },
  {
   "source": "Information Theory",
   "target": "Mathematics MOC",
   "weight": 2
  },
  {
   "source": "Information Theory",
   "target": "Model Evaluation and Tuning",
   "weight": 2
  },
  {
   "source": "Information Theory",
   "target": "Neural Network Basics",
   "weight": 1
  },
  {
   "source": "Information Theory",
   "target": "Probability Theory",
   "weight": 2
  },
  {
   "source": "Interactive Visualization",
   "target": "Visualization Design Principles",
   "weight": 1
  },
  {
   "source": "KNN and Naive Bayes",
   "target": "Machine Learning MOC",
   "weight": 2
  },
  {
   "source": "Kaggle Notes",
   "target": "Portfolio Building",
   "weight": 1
  },
  {
   "source": "Kaggle Notes",
   "target": "Project Template",
   "weight": 2
  },
  {
   "source": "Kaggle Notes",
   "target": "Projects MOC",
   "weight": 2
  },
  {
   "source": "Large Language Models",
   "target": "Project Template",
   "weight": 1
  },
  {
   "source": "Large Language Models",
   "target": "Transformers and Attention",
   "weight": 2
  },
  {
   "source": "Linear Algebra",
   "target": "Linear Models",
   "weight": 2
  },
  {
   "source": "Linear Algebra",
   "target": "Mathematics MOC",
   "weight": 2
  },
  {
   "source": "Linear Algebra",
   "target": "Neural Network Basics",
   "weight": 2
  },
  {
   "source": "Linear Algebra",
   "target": "NumPy",
   "weight": 3
  },
  {
   "source": "Linear Models",
   "target": "Machine Learning MOC",
   "weight": 2
  },
  {
   "source": "Linear Models",
   "target": "Optimization",
   "weight": 3
  },
  {
   "source": "Linear Models",
   "target": "Regression Analysis",
   "weight": 3
  },
  {
   "source": "Linear Models",
   "target": "Supervised Learning Overview",
   "weight": 1
  },
  {
   "source": "Linear Models",
   "target": "Support Vector Machines",
   "weight": 1
  },
  {
   "source": "MLOps",
   "target": "Model Evaluation and Tuning",
   "weight": 1
  },
  {
   "source": "MLOps",
   "target": "Project Template",
   "weight": 1
  },
  {
   "source": "Machine Learning MOC",
   "target": "Model Evaluation and Tuning",
   "weight": 2
  },
  {
   "source": "Machine Learning MOC",
   "target": "Supervised Learning Overview",
   "weight": 2
  },
  {
   "source": "Machine Learning MOC",
   "target": "Support Vector Machines",
   "weight": 2
  },
  {
   "source": "Machine Learning MOC",
   "target": "🌌 Data Science Second Brain",
   "weight": 2
  },
  {
   "source": "Mathematics MOC",
   "target": "Optimization",
   "weight": 2
  },
  {
   "source": "Mathematics MOC",
   "target": "Probability Theory",
   "weight": 2
  },
  {
   "source": "Mathematics MOC",
   "target": "🌌 Data Science Second Brain",
   "weight": 2
  },
  {
   "source": "Matplotlib and Seaborn",
   "target": "Pandas",
   "weight": 2
  },
  {
   "source": "Matplotlib and Seaborn",
   "target": "Project Template",
   "weight": 1
  },
  {
   "source": "Matplotlib and Seaborn",
   "target": "Visualization Design Principles",
   "weight": 2
  },
  {
   "source": "Model Evaluation and Tuning",
   "target": "Project Template",
   "weight": 1
  },
  {
   "source": "Model Evaluation and Tuning",
   "target": "Supervised Learning Overview",
   "weight": 2
  },
  {
   "source": "Model Evaluation and Tuning",
   "target": "Time Series Analysis",
   "weight": 1
  },
  {
   "source": "Neural Network Basics",
   "target": "Optimization",
   "weight": 2
  },
  {
   "source": "Neural Network Basics",
   "target": "PyTorch in Practice",
   "weight": 2
  },
  {
   "source": "Neural Network Basics",
   "target": "RNNs and Sequence Models",
   "weight": 1
  },
  {
   "source": "Note Template",
   "target": "🌌 Data Science Second Brain",
   "weight": 1
  },
  {
   "source": "NumPy",
   "target": "Pandas",
   "weight": 2
  },
  {
   "source": "NumPy",
   "target": "Programming and Tools MOC",
   "weight": 2
  },
  {
   "source": "NumPy",
   "target": "PyTorch in Practice",
   "weight": 1
  },
  {
   "source": "NumPy",
   "target": "Python Basics",
   "weight": 1
  },
  {
   "source": "Optimization",
   "target": "Support Vector Machines",
   "weight": 1
  },
  {
   "source": "Pandas",
   "target": "Programming and Tools MOC",
   "weight": 2
  },
  {
   "source": "Pandas",
   "target": "Python Basics",
   "weight": 1
  },
  {
   "source": "Pandas",
   "target": "SQL Fundamentals",
   "weight": 2
  },
  {
   "source": "Portfolio Building",
   "target": "Project Template",
   "weight": 2
  },
  {
   "source": "Portfolio Building",
   "target": "Projects MOC",
   "weight": 2
  },
  {
   "source": "Programming and Tools MOC",
   "target": "Python Basics",
   "weight": 2
  },
  {
   "source": "Programming and Tools MOC",
   "target": "🌌 Data Science Second Brain",
   "weight": 2
  },
  {
   "source": "Project Template",
   "target": "Projects MOC",
   "weight": 2
  },
  {
   "source": "Projects MOC",
   "target": "🌌 Data Science Second Brain",
   "weight": 2
  },
  {
   "source": "RNNs and Sequence Models",
   "target": "Time Series Analysis",
   "weight": 1
  },
  {
   "source": "RNNs and Sequence Models",
   "target": "Transformers and Attention",
   "weight": 2
  },
  {
   "source": "Regression Analysis",
   "target": "Statistics MOC",
   "weight": 2
  },
  {
   "source": "Regression Analysis",
   "target": "Time Series Analysis",
   "weight": 1
  },
  {
   "source": "Statistics MOC",
   "target": "Time Series Analysis",
   "weight": 2
  },
  {
   "source": "Statistics MOC",
   "target": "🌌 Data Science Second Brain",
   "weight": 2
  }
 ]
};
