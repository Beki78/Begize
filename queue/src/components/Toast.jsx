import React from 'react'
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Toast = () => {
    const { toast } = useToast();
  return (
    <div>
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
}

export default Toast
