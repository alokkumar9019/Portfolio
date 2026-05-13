import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingDownload = () => {
  const resumeUrl = "/Alok_Resume.pdf";

 const handleDownload = () => {
  // Download first
  const link = document.createElement("a");
  link.href = "/Alok_Resume.pdf";
  link.download = "Alok_Resume.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Then open after delay
  setTimeout(() => {
    window.open("/Alok_Resume.pdf", "_blank");
  }, 1500);
};

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleDownload}
        className="
          relative h-[5.5rem] w-[5.5rem] rounded-full p-0
          bg-gradient-to-r from-blue-500 to-cyan-400
          flex items-center justify-center
          transition-all duration-300
          hover:scale-105
          shadow-[0_0_30px_rgba(56,189,248,0.35)]
        "
      >
        <span className="absolute inset-0 rounded-full blur-2xl opacity-80 bg-gradient-to-r from-blue-500 to-cyan-400"></span>

        <span className="relative z-10 flex items-center justify-center h-full w-full rounded-full">
          <Download className="h-14 w-14 text-white" />
        </span>
      </Button>
    </div>
  );
};

export default FloatingDownload;