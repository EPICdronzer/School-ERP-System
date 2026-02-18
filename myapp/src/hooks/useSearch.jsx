import { useMemo } from "react";

export default function useSearch(
  students,
  searchTerm,
  currentPage,
  itemsPerPage
) {
  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.toString().includes(searchTerm)
    );
  }, [students, searchTerm]);

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentStudents = filteredStudents.slice(firstIndex, lastIndex);

  return {
    currentStudents,
    totalPages,
  };
}
