-- student's info
SELECT
	u.*,
	st.gradeLevel,
	sc.[name] AS mainLocationName,
	sc.addressLine1 AS mainLocationAddressLine1,
	sc.addressLine2 AS mainLocationAddressLine2,
	sc.city AS mainLocationCity,
	sc.[state] AS mainLocationState,
	sc.zipCode AS mainLocationZipCode,
	sc.phone AS mainLocationPhone
FROM students st
INNER JOIN users u
ON st.username = u.username
LEFT JOIN schools sc
ON u.MainLocationNumber = sc.schoolNumber
WHERE st.username = '111111'

--user's addresses
SELECT u.username, ad.* FROM users u
LEFT JOIN addresses ad
ON u.username = ad.ownerId
WHERE u.username = '111111'

--user's enrollments
SELECT en.* , co.courseId, co.title AS CourseTitle, u.first AS TeacherFirst, u.last AS TeacherLast
FROM enrollments en
LEFT JOIN courses co
ON en.courseId = co.courseId
LEFT JOIN teachers te
ON en.teacherId = te.username
LEFT JOIN users u
ON en.teacherId = u.username
WHERE en.studentId = '111111'
