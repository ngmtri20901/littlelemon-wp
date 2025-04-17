"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { cuisines, dietaryOptions } from "@/lib/menu-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "lucide-react";

export function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get initial filter values from URL
  const initialTag = searchParams.get("tag") || "";
  const initialMinPrice = Number(searchParams.get("minPrice")) || 0;
  const initialMaxPrice = Number(searchParams.get("maxPrice")) || 30;
  const initialDiet = searchParams.get("diet") || "all";
  const initialCuisine = searchParams.get("cuisine") || "all";

  // State for filters
  const initialTags = searchParams.getAll("tag") || [];
  const [tags, setTags] = useState<string[]>(initialTags);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialMinPrice,
    initialMaxPrice,
  ]);
  const [diet, setDiet] = useState(initialDiet);
  const [cuisine, setCuisine] = useState(initialCuisine);

  // Apply filters
  const applyFilters = useCallback(() => {
    const params = new URLSearchParams();

    tags.forEach((t) => params.append("tag", t)); // Thêm từng tag
    params.set("minPrice", priceRange[0].toString());
    params.set("maxPrice", priceRange[1].toString());
    params.set("diet", diet);
    params.set("cuisine", cuisine);

    router.push(`/menu?${params.toString()}`);
  }, [tags, priceRange, diet, cuisine, router]);

  // Reset filters
  const resetFilters = useCallback(() => {
    setPriceRange([0, 30]);
    setDiet("all");
    setCuisine("all");
    router.push("/menu");
  }, [router]);

  // Update filters when URL changes
  useEffect(() => {
    setTags(initialTags)
    setPriceRange([initialMinPrice, initialMaxPrice]);
    setDiet(initialDiet);
    setCuisine(initialCuisine);
  }, [
    initialTag,
    initialMinPrice,
    initialMaxPrice,
    initialDiet,
    initialCuisine,
  ]);

  const toggleTag = (value: string) => {
    setTags((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Tag className="mr-2 h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Tags */}
          {/* Tags */}
          <div>
            <h3 className="font-medium mb-3">Tags</h3>
            <div className="space-y-2">
              {["new", "best-seller", "discount"].map((t) => (
                <div key={t} className="flex items-center space-x-2">
                  <Checkbox
                    id={`tag-${t}`}
                    checked={tags.includes(t)}
                    onCheckedChange={() => toggleTag(t)}
                  />
                  <Label htmlFor={`tag-${t}`}>
                    {t === "new"
                      ? "New dishes"
                      : t === "best-seller"
                      ? "Best sellers"
                      : "Discounts"}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <Slider
              defaultValue={priceRange}
              min={0}
              max={30}
              step={1}
              value={priceRange}
              onValueChange={(value) =>
                setPriceRange(value as [number, number])
              }
              className="mb-2"
            />
            <div className="flex justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Dietary Options */}
          <div>
            <h3 className="font-medium mb-3">Dietary Options</h3>
            <RadioGroup
              value={diet}
              onValueChange={setDiet}
              className="space-y-2"
            >
              {dietaryOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={`diet-${option.id}`} />
                  <Label htmlFor={`diet-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Cuisine */}
          <div>
            <h3 className="font-medium mb-3">Cuisine</h3>
            <RadioGroup
              value={cuisine}
              onValueChange={setCuisine}
              className="space-y-2"
            >
              {cuisines.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.id}
                    id={`cuisine-${option.id}`}
                  />
                  <Label htmlFor={`cuisine-${option.id}`}>{option.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-2">
            <Button
              onClick={applyFilters}
              className="w-full bg-lemon-600 hover:bg-lemon-700"
            >
              Apply Filters
            </Button>
            <Button onClick={resetFilters} variant="outline" className="w-full">
              Reset Filters
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
