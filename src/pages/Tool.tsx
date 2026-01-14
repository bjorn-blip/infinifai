import { Wizard } from "@/components/tool/Wizard";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ToolPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent/20 print:bg-white print:text-black">
            <div className="print:hidden">
                <Navbar />
            </div>
            <main className="flex-grow pt-24 print:pt-0">
                <Wizard />
            </main>
            <div className="print:hidden">
                <Footer />
            </div>
        </div>
    );
};

export default ToolPage;
