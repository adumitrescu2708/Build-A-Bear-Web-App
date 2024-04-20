﻿namespace BuildABear.Infrastructure.Authorization;

/// <summary>
/// This record is used to store the claims extracted from the JWT
/// </summary>
public record UserClaims(Guid Id, string? Name, string? Email, string ?Country, string? Role, string? PhoneNumber);
