import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingDownload = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        className="
          relative h-20 w-20 rounded-full p-0
          bg-gradient-to-r from-blue-500 to-cyan-400
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110
        "
      >
        <a
          href="/Alok_Resume.pdf"
          download
          title="Download Resume"
          className="flex items-center justify-center h-full w-full"
        >
          {/* Glow */}
          <span className="absolute inset-0 rounded-full blur-2xl opacity-80 bg-gradient-to-r from-blue-500 to-cyan-400"></span>

          {/* Button */}
          <span className="relative z-10 flex items-center justify-center h-full w-full rounded-full">
            <Download className="h-12 w-12 text-white" />
          </span>
        </a>
      </Button>
    </div>
  );
};

export default FloatingDownload;