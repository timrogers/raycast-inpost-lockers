import { List } from "@raycast/api";
import { useState } from "react";
import { findLocationsByPostcode, ListedLocation } from "inpost";
import isValidPostcode from "uk-postcode-validator";
import { LocationItem } from "./shared";
import { useCachedPromise } from "@raycast/utils";

export default function Command() {
  console.log('Render');

  const [searchText, setSearchText] = useState<string>("");

  const {
    isLoading,
    data: locations,
    revalidate: refreshSearch,
  } = useCachedPromise<(text: string) => Promise<ListedLocation[]>>(
    async (text: string) => {
      console.log("In useCachedPromise");

      if (text.toUpperCase() != text) {
        setSearchText(text.toUpperCase());
        return [];
      } else if (!isValidPostcode(searchText)) {
        return [];
      } else {
        const locations = await findLocationsByPostcode(text);
        return locations;
      }
    },
    [searchText],
  );

  return (
    <List
      isLoading={isLoading}
      searchText={searchText}
      onSearchTextChange={setSearchText}
      searchBarPlaceholder="Enter your postcode"
    >
      <List.Section title="Locations" subtitle={locations && locations.length + ""}>
        {locations &&
          locations.map((location) => (
            <LocationItem key={location.id} location={location} refreshLocations={refreshSearch} />
          ))}
      </List.Section>
    </List>
  );
}
