"use client";

import { useState } from "react";

export function EarningsCalculator() {
  const [templates, setTemplates] = useState(5);
  const [salesPerMonth, setSalesPerMonth] = useState(10);

  const pricePerTemplate = 2;
  const creatorShare = 0.8;
  const monthlyEarnings = templates * salesPerMonth * pricePerTemplate * creatorShare;

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-lg shadow-brand-blue/5 sm:p-12">
      <div className="space-y-8">
        {/* Templates slider */}
        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">
              Templates you create
            </label>
            <span className="font-mono text-lg font-bold text-brand-blue">
              {templates}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            value={templates}
            onChange={(e) => setTemplates(Number(e.target.value))}
            className="mt-3 w-full accent-brand-blue"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>50</span>
          </div>
        </div>

        {/* Sales slider */}
        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">
              Avg. sales per template/month
            </label>
            <span className="font-mono text-lg font-bold text-brand-blue">
              {salesPerMonth}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={100}
            value={salesPerMonth}
            onChange={(e) => setSalesPerMonth(Number(e.target.value))}
            className="mt-3 w-full accent-brand-blue"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>1</span>
            <span>100</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/60" />

        {/* Result */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Your estimated monthly earnings
          </p>
          <p className="mt-2 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            ${monthlyEarnings.toLocaleString()}
            <span className="text-lg font-normal text-muted-foreground">
              /month
            </span>
          </p>
          <p className="mt-3 font-mono text-xs text-muted-foreground">
            {templates} templates &times; {salesPerMonth} sales &times; $
            {pricePerTemplate} &times; 80% = ${monthlyEarnings.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
