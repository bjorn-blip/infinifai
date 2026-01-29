import { Target, ShieldCheck, FileText, Users2, Compass, AlertTriangle, Search, Map, Zap, Activity, Rocket } from "lucide-react";

export const toolQuestions = [
    {
        phaseKey: "tool.questions.define.phase",
        id: "define",
        steps: [
            {
                id: "D",
                letter: "D",
                icon: Target,
                titleKey: "tool.questions.define.D.title",
                questionKey: "tool.questions.define.D.question",
                options: [
                    { labelKey: "tool.questions.define.D.options.efficiency.label", value: "efficiency", recommendationKey: "tool.questions.define.D.options.efficiency.rec" },
                    { labelKey: "tool.questions.define.D.options.growth.label", value: "growth", recommendationKey: "tool.questions.define.D.options.growth.rec" },
                    { labelKey: "tool.questions.define.D.options.cx.label", value: "cx", recommendationKey: "tool.questions.define.D.options.cx.rec" },
                    { labelKey: "tool.questions.define.D.options.innovation.label", value: "innovation", recommendationKey: "tool.questions.define.D.options.innovation.rec" }
                ]
            },
            {
                id: "E",
                letter: "E",
                icon: ShieldCheck,
                titleKey: "tool.questions.define.E.title",
                questionKey: "tool.questions.define.E.question",
                options: [
                    { labelKey: "tool.questions.define.E.options.roi.label", value: "roi", recommendationKey: "tool.questions.define.E.options.roi.rec" },
                    { labelKey: "tool.questions.define.E.options.qualitative.label", value: "qualitative", recommendationKey: "tool.questions.define.E.options.qualitative.rec" },
                    { labelKey: "tool.questions.define.E.options.technical.label", value: "technical", recommendationKey: "tool.questions.define.E.options.technical.rec" },
                    { labelKey: "tool.questions.define.E.options.none.label", value: "none", recommendationKey: "tool.questions.define.E.options.none.rec" }
                ]
            },
            {
                id: "F",
                letter: "F",
                icon: FileText,
                titleKey: "tool.questions.define.F.title",
                questionKey: "tool.questions.define.F.question",
                options: [
                    { labelKey: "tool.questions.define.F.options.agent.label", value: "agent", recommendationKey: "tool.questions.define.F.options.agent.rec" },
                    { labelKey: "tool.questions.define.F.options.dashboard.label", value: "dashboard", recommendationKey: "tool.questions.define.F.options.dashboard.rec" },
                    { labelKey: "tool.questions.define.F.options.automation.label", value: "automation", recommendationKey: "tool.questions.define.F.options.automation.rec" },
                    { labelKey: "tool.questions.define.F.options.strategy.label", value: "strategy", recommendationKey: "tool.questions.define.F.options.strategy.rec" }
                ]
            },
            {
                id: "I",
                letter: "I",
                icon: Users2,
                titleKey: "tool.questions.define.I.title",
                questionKey: "tool.questions.define.I.question",
                options: [
                    { labelKey: "tool.questions.define.I.options.board.label", value: "board", recommendationKey: "tool.questions.define.I.options.board.rec" },
                    { labelKey: "tool.questions.define.I.options.head.label", value: "head", recommendationKey: "tool.questions.define.I.options.head.rec" },
                    { labelKey: "tool.questions.define.I.options.it.label", value: "it", recommendationKey: "tool.questions.define.I.options.it.rec" },
                    { labelKey: "tool.questions.define.I.options.distributed.label", value: "distributed", recommendationKey: "tool.questions.define.I.options.distributed.rec" }
                ]
            },
            {
                id: "N",
                letter: "N",
                icon: Compass,
                titleKey: "tool.questions.define.N.title",
                questionKey: "tool.questions.define.N.question",
                options: [
                    { labelKey: "tool.questions.define.N.options.budget.label", value: "budget", recommendationKey: "tool.questions.define.N.options.budget.rec" },
                    { labelKey: "tool.questions.define.N.options.data.label", value: "data", recommendationKey: "tool.questions.define.N.options.data.rec" },
                    { labelKey: "tool.questions.define.N.options.skills.label", value: "skills", recommendationKey: "tool.questions.define.N.options.skills.rec" },
                    { labelKey: "tool.questions.define.N.options.legacy.label", value: "legacy", recommendationKey: "tool.questions.define.N.options.legacy.rec" }
                ]
            },
            {
                id: "E_risk",
                letter: "E",
                icon: AlertTriangle,
                titleKey: "tool.questions.define.E_risk.title",
                questionKey: "tool.questions.define.E_risk.question",
                options: [
                    { labelKey: "tool.questions.define.E_risk.options.high.label", value: "high", recommendationKey: "tool.questions.define.E_risk.options.high.rec" },
                    { labelKey: "tool.questions.define.E_risk.options.moderate.label", value: "moderate", recommendationKey: "tool.questions.define.E_risk.options.moderate.rec" },
                    { labelKey: "tool.questions.define.E_risk.options.low.label", value: "low", recommendationKey: "tool.questions.define.E_risk.options.low.rec" },
                    { labelKey: "tool.questions.define.E_risk.options.very_low.label", value: "very_low", recommendationKey: "tool.questions.define.E_risk.options.very_low.rec" }
                ]
            }
        ]
    },
    {
        phaseKey: "tool.questions.frame.phase",
        id: "frame",
        steps: [
            {
                id: "F_frame",
                letter: "F",
                icon: Search,
                titleKey: "tool.questions.frame.F_frame.title",
                questionKey: "tool.questions.frame.F_frame.question",
                options: [
                    { labelKey: "tool.questions.frame.F_frame.options.poc.label", value: "poc", recommendationKey: "tool.questions.frame.F_frame.options.poc.rec" },
                    { labelKey: "tool.questions.frame.F_frame.options.theory.label", value: "theory", recommendationKey: "tool.questions.frame.F_frame.options.theory.rec" },
                    { labelKey: "tool.questions.frame.F_frame.options.scratch.label", value: "scratch", recommendationKey: "tool.questions.frame.F_frame.options.scratch.rec" },
                    { labelKey: "tool.questions.frame.F_frame.options.advice.label", value: "advice", recommendationKey: "tool.questions.frame.F_frame.options.advice.rec" }
                ]
            },
            {
                id: "R",
                letter: "R",
                icon: Map,
                titleKey: "tool.questions.frame.R.title",
                questionKey: "tool.questions.frame.R.question",
                options: [
                    { labelKey: "tool.questions.frame.R.options.asap.label", value: "asap", recommendationKey: "tool.questions.frame.R.options.asap.rec" },
                    { labelKey: "tool.questions.frame.R.options.sprint.label", value: "sprint", recommendationKey: "tool.questions.frame.R.options.sprint.rec" },
                    { labelKey: "tool.questions.frame.R.options.project.label", value: "project", recommendationKey: "tool.questions.frame.R.options.project.rec" },
                    { labelKey: "tool.questions.frame.R.options.transformation.label", value: "transformation", recommendationKey: "tool.questions.frame.R.options.transformation.rec" }
                ]
            },
            {
                id: "A",
                letter: "A",
                icon: Zap,
                titleKey: "tool.questions.frame.A.title",
                questionKey: "tool.questions.frame.A.question",
                options: [
                    { labelKey: "tool.questions.frame.A.options.buy.label", value: "buy", recommendationKey: "tool.questions.frame.A.options.buy.rec" },
                    { labelKey: "tool.questions.frame.A.options.build.label", value: "build", recommendationKey: "tool.questions.frame.A.options.build.rec" },
                    { labelKey: "tool.questions.frame.A.options.hybrid.label", value: "hybrid", recommendationKey: "tool.questions.frame.A.options.hybrid.rec" },
                    { labelKey: "tool.questions.frame.A.options.lowcode.label", value: "lowcode", recommendationKey: "tool.questions.frame.A.options.lowcode.rec" }
                ]
            },
            {
                id: "M",
                letter: "M",
                icon: Activity,
                titleKey: "tool.questions.frame.M.title",
                questionKey: "tool.questions.frame.M.question",
                options: [
                    { labelKey: "tool.questions.frame.M.options.modern.label", value: "modern", recommendationKey: "tool.questions.frame.M.options.modern.rec" },
                    { labelKey: "tool.questions.frame.M.options.fragmented.label", value: "fragmented", recommendationKey: "tool.questions.frame.M.options.fragmented.rec" },
                    { labelKey: "tool.questions.frame.M.options.manual.label", value: "manual", recommendationKey: "tool.questions.frame.M.options.manual.rec" },
                    { labelKey: "tool.questions.frame.M.options.none.label", value: "none", recommendationKey: "tool.questions.frame.M.options.none.rec" }
                ]
            },
            {
                id: "E_scale",
                letter: "E",
                icon: Rocket,
                titleKey: "tool.questions.frame.E_scale.title",
                questionKey: "tool.questions.frame.E_scale.question",
                options: [
                    { labelKey: "tool.questions.frame.E_scale.options.scale.label", value: "scale", recommendationKey: "tool.questions.frame.E_scale.options.scale.rec" },
                    { labelKey: "tool.questions.frame.E_scale.options.depth.label", value: "depth", recommendationKey: "tool.questions.frame.E_scale.options.depth.rec" },
                    { labelKey: "tool.questions.frame.E_scale.options.maintain.label", value: "maintain", recommendationKey: "tool.questions.frame.E_scale.options.maintain.rec" },
                    { labelKey: "tool.questions.frame.E_scale.options.exit.label", value: "exit", recommendationKey: "tool.questions.frame.E_scale.options.exit.rec" }
                ]
            }
        ]
    }
];
