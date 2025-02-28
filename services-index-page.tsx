import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Settings, Upload } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }) => (
  <Card className="w-full max-w-sm">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Icon className="h-6 w-6" />
        <span>{title}</span>
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {/* Add more content or actions here */}
    </CardContent>
  </Card>
);

const TabContent = ({ services }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {services.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </div>
);

const ServicesIndexPage = () => {
  const [activeTab, setActiveTab] = useState('create');

  const tabsContent = {
    create: [
      { title: 'New Project', description: 'Start a new project from scratch', icon: PlusCircle },
      { title: 'Use Template', description: 'Choose from pre-made templates', icon: PlusCircle },
      { title: 'Import', description: 'Import an existing project', icon: PlusCircle },
    ],
    manage: [
      { title: 'My Projects', description: 'View and edit your projects', icon: Settings },
      { title: 'Collaborations', description: 'Manage shared projects', icon: Settings },
      { title: 'Archives', description: 'Access archived projects', icon: Settings },
    ],
    publish: [
      { title: 'Publish to Web', description: 'Make your project public', icon: Upload },
      { title: 'Export', description: 'Download your project', icon: Upload },
      { title: 'Share', description: 'Share with specific users', icon: Upload },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Services Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="manage">Manage</TabsTrigger>
          <TabsTrigger value="publish">Publish</TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <TabContent services={tabsContent.create} />
        </TabsContent>
        <TabsContent value="manage">
          <TabContent services={tabsContent.manage} />
        </TabsContent>
        <TabsContent value="publish">
          <TabContent services={tabsContent.publish} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServicesIndexPage;
