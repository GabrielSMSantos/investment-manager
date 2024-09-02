import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import FinancialAsset from "@/components/FinancialAsset";
import { Button } from "@nextui-org/button";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <p className="text-2xl font-semibold mb-3">Visão Geral da Carteira</p>
      <div className="flex flex-row gap-4">
        <div className="w-3/12 h-full gap-2 flex flex-col relative pb-12">
          <FinancialAsset />
          <FinancialAsset />
          <FinancialAsset />
          <FinancialAsset />
          <FinancialAsset />
          <FinancialAsset />
          <FinancialAsset />
        </div>
        <div className="w-9/12 flex flex-col bg-orange-600 gap-4">
          <div className="bg-yellow-500 h-64">

          </div>
          <div className="bg-purple-500 h-64">

          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
