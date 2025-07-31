export const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://jsonplaceholder.typicode.com";

export async function get<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (!res.ok) throw new Error(`GET ${endpoint} failed: ${res.status}`);
  return res.json();
}

export async function post<T>(endpoint: string, data: any): Promise<T> {
  const res = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });
  if (!res.ok) throw new Error(`POST ${endpoint} failed: ${res.status}`);
  return res.json();
}

export async function del<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (!res.ok) throw new Error(`DELETE ${endpoint} failed: ${res.status}`);
  return res.json();
}

// Sample usage:
// const users = await get<User[]>("/users");
// const newUser = await post<User>("/users", { name: "John" });
// const deleted =