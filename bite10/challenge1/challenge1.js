const cohort = {
  name: 'May2022',
  id: 1234,
  students: [
    'Wendy',
    'Bob',
    'Dave',
  ]
};

const printCohort = (object) => {
  console.log(`${object.id} - ${object.name} - ${object.students.length} students in this cohort`)
}

printCohort(cohort);
