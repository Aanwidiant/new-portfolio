'use client';

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Header
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={() => setSidebarOpen((prev) => !prev)}
            />
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={() => setSidebarOpen(false)}
            />
            <div>{children}</div>
            <Footer />
        </>
    );
}