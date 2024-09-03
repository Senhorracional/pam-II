import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Meus Filmes" />
      <Tabs.Screen name="raiva" />
      <Tabs.Screen name="alegria" />
      <Tabs.Screen name="medo" />
      <Tabs.Screen name="nojinho" />
    </Tabs>
  );
}
