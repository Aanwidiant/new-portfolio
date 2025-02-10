"use client"
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Card from "@/components/card";

interface ApiResponse {
  other_projects: Project[];
}

interface Project {
  _id: string;
  title: string;
  first_image: string;
}

type Props = {
  children: React.ReactNode;
};

export default function DetailProjectLayout({ children }: Props) {
  const { slug } = useParams();
  const [otherProject, setOtherProject] = useState<Project[]>([]);

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/project/other/${slug}`);
        if (response.ok) {
          const data: ApiResponse = await response.json();
          setOtherProject(data.other_projects);
        } else {
          console.error("Data tidak ditemukan");
        }
      } catch (error) {
        console.error("Error fetching project content:", error);
      }
    };

    fetchProject();
  }, [slug]);

  if (otherProject.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex flex-wrap pt-28 pb-16 min-h-screen">
      <main className="w-full px-4">{children}</main>
      <div className=" w-full p-4">
        <h2 className="text-lg md:text-xl font-bold pb-4">Project Lainnya</h2>
        <div className="grid grid-cols-6 gap-6 w-full">
          {otherProject.map((project) => (
            <Card
              key={project._id}
              title={project.title}
              buttonText="Lihat Detail"
              link={`/project/${createSlug(project.title)}`}
              imageSrc={project.first_image || "/fallback-img.png"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
