import React from "react";
import { Metadata } from "next";
import TeamDetailsMain from "@/pages/team/team-details";
import team_data from "@/data/team-data";

export const metadata: Metadata = {
  title: "Liko - Team Details page",
};

export function generateStaticParams() {
  // Return an array of objects, where each object represents a product ID.
  return team_data.map((team) => ({
    id: team.id.toString(),
  }));
}

export default async function TeamDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const team = [...team_data].find((t) => t.id === Number(id));
  return team ? (
    <TeamDetailsMain item={team} />
  ) : (
    <div className="text-center pt-100">Team not found with id: {id}</div>
  );
}
