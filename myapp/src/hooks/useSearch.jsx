import { useMemo } from "react";

export default function useSearch(
  user,
  searchTerm,
  currentPage,
  itemsPerPage
) {
  const filteredStudents = useMemo(() => {
    if (!searchTerm) return user;

    return user.filter((item) =>
      Object.values(item).some((value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [user, searchTerm]);
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentStudents = filteredStudents.slice(firstIndex, lastIndex);

  return {
    currentStudents,
    totalPages,
  };
}
