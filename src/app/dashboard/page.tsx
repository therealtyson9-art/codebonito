"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MOCK_TEMPLATES } from "@/lib/mock-data";
import { Download, Plus, Eye } from "lucide-react";

// In production, this would come from Supabase filtered by creator_id
const MY_TEMPLATES = MOCK_TEMPLATES.slice(0, 3);

export default function DashboardPage() {
  const totalDownloads = MY_TEMPLATES.reduce(
    (sum, t) => sum + t.downloads_count,
    0
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Manage your templates and track performance
          </p>
        </div>
        <Button asChild>
          <Link href="/upload">
            <Plus className="mr-2 h-4 w-4" />
            Upload Template
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Templates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{MY_TEMPLATES.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Downloads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {totalDownloads.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$0.00</div>
            <p className="mt-1 text-xs text-muted-foreground">
              Payouts coming soon
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Templates List */}
      <Tabs defaultValue="all" className="mt-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <TemplateList templates={MY_TEMPLATES} />
        </TabsContent>
        <TabsContent value="published" className="mt-6">
          <TemplateList
            templates={MY_TEMPLATES.filter((t) => t.status === "published")}
          />
        </TabsContent>
        <TabsContent value="draft" className="mt-6">
          <TemplateList
            templates={MY_TEMPLATES.filter((t) => t.status === "draft")}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function TemplateList({
  templates,
}: {
  templates: typeof MOCK_TEMPLATES;
}) {
  if (templates.length === 0) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        No templates found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {templates.map((template) => (
        <Card key={template.id}>
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold">{template.name}</h3>
                <Badge
                  variant={
                    template.status === "published" ? "default" : "secondary"
                  }
                >
                  {template.status}
                </Badge>
                {template.price_tier === "pro" && (
                  <Badge variant="outline">PRO</Badge>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {template.category} &middot; {template.style}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Download className="h-4 w-4" />
                {template.downloads_count.toLocaleString()}
              </div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/template/${template.id}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
