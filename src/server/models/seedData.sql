--insert users
INSERT INTO [dbo].[users] ([username], [password], [first], [last], [dob], [email], [phone]) VALUES (N'111111', N'123', N'Angel', N'Valdes', N'1973-08-05 00:00:00', N'angel@mylearningdoor.com', N'3059876543')
INSERT INTO [dbo].[users] ([username], [password], [first], [last], [dob], [email], [phone]) VALUES (N'222222', N'123', N'Cindy', N'Monsalve', N'1988-12-15 00:00:00', N'cindy@mylearningdoor.com', N'7866548765')
INSERT INTO [dbo].[users] ([username], [password], [first], [last], [dob], [email], [phone]) VALUES (N'333333', N'123', N'Jorge', N'Bla', N'1978-12-10 00:00:00', N'jorge@mylearningdoor.com', N'3058987658')
GO
--insert students
INSERT INTO [dbo].[students] ([username], [gradeLevel]) VALUES (N'111111', N'5th')
INSERT INTO [dbo].[students] ([username], [gradeLevel]) VALUES (N'222222', N'9th')

--insert teacher
INSERT INTO [dbo].[teachers] ([username], [certificationArea]) VALUES (N'333333', N'Computers')

