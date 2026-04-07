"use client";
import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  accentColor: string;
}

export default function StarRating({ rating, accentColor }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          fill={i < rating ? accentColor : "transparent"}
          stroke={i < rating ? accentColor : "rgba(255,255,255,0.2)"}
        />
      ))}
    </div>
  );
}
