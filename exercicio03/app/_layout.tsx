import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="meusFilmes" />
      <Tabs.Screen name="proximos" />
    </Tabs>
  );
}
