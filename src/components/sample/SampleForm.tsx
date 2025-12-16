import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

export const SampleForm: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Form Elements</h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Client Intake Form</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <div className="w-full h-10 border border-input rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                John Doe
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <div className="w-full h-10 border border-input rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                john.doe@example.com
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred Session Type</label>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">In-Person</Button>
                <Button variant="outline" size="sm">Virtual</Button>
                <Button variant="default" size="sm">Both</Button>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline">Cancel</Button>
              <Button>Save Client</Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};